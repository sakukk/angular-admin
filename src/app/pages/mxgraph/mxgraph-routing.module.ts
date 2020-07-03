import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {MxgraphComponent} from './mxgraph.component';

const routes: Routes = [
  {path: '', component: MxgraphComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MxgraphRoutingModule {

}
