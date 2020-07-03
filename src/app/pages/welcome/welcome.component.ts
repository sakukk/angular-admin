import { Component, OnInit, AfterViewInit } from '@angular/core';

import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    const source$ = interval(1000).pipe(take(4));
    source$.subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
  }
}
