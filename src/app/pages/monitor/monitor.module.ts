import { NgModule } from '@angular/core';

import { MonitorComponent } from './monitor.component';

import { MonitorRoutingModule } from './monitor-routing.module';

@NgModule({
    declarations: [MonitorComponent],
    exports: [MonitorComponent],
    imports: [MonitorRoutingModule]
})

export class MonitorModule {}