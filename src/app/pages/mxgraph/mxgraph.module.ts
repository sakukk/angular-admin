import { NgModule } from '@angular/core';

import {MxgraphComponent} from './mxgraph.component';
import {MxgraphRoutingModule} from './mxgraph-routing.module'
@NgModule({
  declarations: [MxgraphComponent],
  exports: [MxgraphComponent],
  imports: [MxgraphRoutingModule]
})
export class MxgraphModule {

}
