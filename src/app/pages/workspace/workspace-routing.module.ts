import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkSpaceComponent } from './workspace.component';

const routes: Routes = [
  { path: '', component: WorkSpaceComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}
