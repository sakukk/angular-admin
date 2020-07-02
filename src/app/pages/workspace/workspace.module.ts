import { NgModule } from '@angular/core';

import { WorkSpaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import {NzButtonModule} from 'ng-zorro-antd/button'

@NgModule({
  declarations: [WorkSpaceComponent],
  exports: [WorkSpaceComponent],
  imports: [ NzButtonModule, WorkspaceRoutingModule ]
})

export class WorkspaceModule {}
