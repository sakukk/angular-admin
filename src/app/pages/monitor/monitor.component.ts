import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-monitor',
    template: `
        <span (click)="handleClick()">monitor</span>
    `,
    styles: []
})
export class MonitorComponent implements OnInit {
    constructor(private router: Router) {}

    handleClick () {
        this.router.navigateByUrl('/welcome');
    }
    
    ngOnInit() {

    }
};