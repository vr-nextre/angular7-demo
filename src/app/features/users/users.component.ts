import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'vr-users',
  template: `
    <!-- <li *ngFor="let user of users" [routerLink]="['/users', user.id]"> -->
    <li *ngFor="let user of userService.users" [routerLink]="['/users', user.id]">
      {{user.name}}
      <button (click)="handlerDelete(user, $event)">CANCELLA</button>
    </li>
  `,
  styles: []
})
export class UsersComponent implements OnInit {


  // pre-service
  /*
  users: any[];
  constructor(http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => this.users = res);
  }
  */

  constructor(public userService: UserService) {
    userService.getUsers();
  }

  ngOnInit() {
  }

  handlerDelete(user: any, event: MouseEvent) {
    event.stopPropagation();
    this.userService.deleteUser(user.id);
  }
}
