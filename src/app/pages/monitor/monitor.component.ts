import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/todo.model';

@Component({
    selector: 'app-monitor',
    template: `
        <span (click)="handleClick()">monitor</span>
        <input nz-input placeholder="Basic usage"/>
        <ul>
            <li *ngFor="let todo of todos">{{todo.desc}}</li>
        </ul>
    `,
    styles: []
})
export class MonitorComponent implements OnInit {

    todos: Todo[] = [];

    constructor(
        private router: Router,
        private userService: UserService,
        private todoService: TodoService
    ) {}

    handleClick () {
        this.router.navigateByUrl('/welcome');
    }

    ngOnInit() {
        this.userService.test();
    }


};