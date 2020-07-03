import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var mxGraph: any;
declare var mxToolbar: any;
declare var mxCell: any;
declare var mxGeometry: any;
declare var mxUtils: any;

@Component({
  selector: 'mx-graph',
  template: `
    <div #toolbar id="toolbar"></div>
    <img [src]="imgurl" width="100%" height="100%"/>
    <div #graphContainer id="graphContainer" >
    </div>`
  ,
  styleUrls: ['./mxgraph.less']
})
export class MxgraphComponent implements OnInit, AfterViewInit{
  @ViewChild('graphContainer') container: ElementRef;
  @ViewChild('toolbar') toolConainer: ElementRef;
  graph: any;
  toolbar: any
  imgurl: string = 'assets/img/test.png';

  constructor() {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      const container = this.container.nativeElement;
      this.graph = new mxGraph(container);
      this.graph.dropenabled = false;

      const v1 = this.graph.insertVertex(null, null, 'Hello,', 20, 20, 80, 30);
      const v2 = this.graph.insertVertex(null, null, 'World!', 200, 150, 80, 30);
      const e1 = this.graph.insertEdge(null, null, '', v1, v2);
      
      this.toolbar = new mxToolbar(this.toolConainer.nativeElement);
      
      this.addVertex('assets/mxgraph/images/maximize.gif', 40, 40, 'shape=cylinder');
      this.addVertex('assets/mxgraph/images/minimize.gif', 30, 40, 'shape=actor');
      this.toolbar.addLine();

      var button = mxUtils.button('Create toolbar entry from selection', (evt) => {

        if (!this.graph.isSelectionEmpty()) {
          
          // Creates a copy of the selection array to preserve its state
          var cells = this.graph.getSelectionCells();
          var bounds = this.graph.getView().getBounds(cells);
          
          // Function that is executed when the image is dropped on
          // the graph. The cell argument points to the cell under
          // the mousepointer if there is one.
          var funct = function(graph, evt, cell)
          {
            graph.stopEditing(false);
    
            var pt = graph.getPointForEvent(evt);
            var dx = pt.x - bounds.x;
            var dy = pt.y - bounds.y;
            
            graph.setSelectionCells(graph.importCells(cells, dx, dy, cell));
          }
          // Creates the image which is used as the drag icon (preview)
          var img = this.toolbar.addMode(null, 'assets/images/outline.gif', funct);
          mxUtils.makeDraggable(img, this.graph, funct);
        }
      });
  
      button.style.position = 'absolute';
      button.style.left = '2px';
      button.style.top = '2px';
      
      document.body.appendChild(button);
  }


  addVertex(icon, w, h, style) {
    var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
    vertex.setVertex(true);
  
    this.addToolbarItem(this.graph, toolbar, vertex, icon);
  }

  addToolbarItem(graph, toolbar, prototype, image) {
    // Function that is executed when the image is dropped on
    // the graph. The cell argument points to the cell under
    // the mousepointer if there is one.
    var funct = function(graph, evt, cell)
    {
      graph.stopEditing(false);

      var pt = graph.getPointForEvent(evt);
      var vertex = graph.getModel().cloneCell(prototype);
      vertex.geometry.x = pt.x;
      vertex.geometry.y = pt.y;
      
      graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
    }

    // Creates the image which is used as the drag icon (preview)
    var img = this.toolbar.addMode(null, image, funct);
    mxUtils.makeDraggable(img, graph, funct);
  }
}
