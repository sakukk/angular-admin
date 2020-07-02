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
    this.map = new maptalks.Map("map", {
      center: [180, 0],
      zoom: 4,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c']
      }),
      layers: [
        new maptalks.VectorLayer('v', [new maptalks.Marker([180, 0])])
      ]
    });
  }

  handleZoomIn(): void {
    this.map.zoomIn();
  }

  handleZoomOut() :void {
    this.map.zoomOut();
  }
}
