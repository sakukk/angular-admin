import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var mxGraph: any;

@Component({
  selector: 'mx-graph',
  template: `
    <div #graphContainer id="graphContainer" 
      style=" background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=');">
    </div>`
  ,
  styleUrls: [
  ]
})
export class MxgraphComponent implements OnInit, AfterViewInit{
  @ViewChild('graphContainer') container: ElementRef
  graph: any
  constructor() {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      const container = this.container.nativeElement;
      this.graph = new mxGraph(container);

      const v1 = this.graph.insertVertex(null, null, 'Hello,', 20, 20, 80, 30);
      const v2 = this.graph.insertVertex(null, null, 'World!', 200, 150, 80, 30);
		  const e1 = this.graph.insertEdge(null, null, '', v1, v2);
  }
}
