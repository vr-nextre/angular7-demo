import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vr-users',
  template: `
    <li *ngFor="let user of users" [routerLink]="['/users', user.id]">
      {{user.name}}
    </li>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  users: any[]; 

  constructor(http: HttpClient) { 
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => this.users = res)
  }

  ngOnInit() {
  }

}
