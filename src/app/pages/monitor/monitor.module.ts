import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonitorComponent } from './monitor.component';

import { MonitorRoutingModule } from './monitor-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
    declarations: [MonitorComponent],
    exports: [MonitorComponent],
    imports: [
        CommonModule,
        MonitorRoutingModule,
        FormsModule,
        NzInputModule
    ]
})

export class MonitorModule {}