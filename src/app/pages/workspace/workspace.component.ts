import { Component, OnInit } from '@angular/core';

import * as maptalks from 'maptalks';

@Component({
  selector: 'work-space',
  templateUrl: './workspace.component.html',
  styleUrls: []
})
export class WorkSpaceComponent implements OnInit {
  map: any = ''
  constructor() {
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./workspace.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

    this.map = new maptalks.Map("map", {
      center: [121.4854, 31.2285],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });


    const line = new maptalks.LineString([
      [121.4854, 31.2285],
      [121.4854, 31.2255],
      [121.4894, 31.2255],
      [121.4874, 31.2275]
    ], {
      arrowStyle : null, // arrow-style : now we only have classic
      arrowPlacement : 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
      visible : true,
      editable : true,
      cursor : null,
      shadowBlur : 0,
      shadowColor : 'black',
      draggable : false,
      dragShadow : false, // display a shadow during dragging
      drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
      symbol: {
        'lineColor' : 'red',
        'lineWidth' : 2,
        'lineDasharray' : [10, 5] // linestring 虚线
      }
    });

    const layer = new maptalks.VectorLayer('vector', line).addTo(this.map);
    const marker = new maptalks.Marker([121.4854,31.2285]).addTo(layer);

    marker.setInfoWindow({
      'title'     : 'Marker\'s InfoWindow',
      'content'   : 'Click on marker to open.',

      // 'autoPan': true,
      // 'width': 300,
      // 'minHeight': 120,
      // 'custom': false,
      'autoOpenOn' : 'click',  //set to null if not to open when clicking on marker
      'autoCloseOn' : 'click'
    });
    // marker.openInfoWindow();
  }

  handleZoomIn(): void {
    this.map.zoomIn();
  }

  handleZoomOut() :void {
    this.map.zoomOut();
  }
}

