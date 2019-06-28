// gestisco solo la parte di data model
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  users;

  init(users: any) {
    this.users = users;
  }

  delete(id: number) {
    const index = this.users.findIndex(item => item.id === id);
    this.users.splice(index, 1);
  }
}
