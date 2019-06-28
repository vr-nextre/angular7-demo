import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {UserStore} from '../../services/user.store';

@Component({
  selector: 'vr-users',
  template: `
    <!-- <li *ngFor="let user of users" [routerLink]="['/users', user.id]"> -->
    <li *ngFor="let user of store.users" [routerLink]="['/users', user.id]">
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

  constructor(
    public actions: UserService,
    public store: UserStore) {
    actions.getUsers();
  }

  ngOnInit() {
  }

  handlerDelete(user: any, event: MouseEvent) {
    event.stopPropagation();
    this.actions.deleteUser(user.id);
  }
}
