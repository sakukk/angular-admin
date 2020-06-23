import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonitorComponent } from './monitor.component';

import { MonitorRoutingModule } from './monitor-routing.module';

@NgModule({
    declarations: [MonitorComponent],
    exports: [MonitorComponent],
    imports: [
        BrowserModule,
        MonitorRoutingModule
    ]
})

export class MonitorModule {}