import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// quando un servizio richiede una dipendenza e la va a
// iniettare in un altro devo decorarlo con @Injectable()

@Injectable({
  // dove deve essere iniettato, in questo caso nel modulo
  // di root, pertanto il modulo app non avrà bisogno di richiedere
  // al provider l'inject del service, esisterà già
  providedIn: 'root'
})
export class UserService {
  users;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    console.log('user.service->getUsers()');
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => this.users = res);
  }

  deleteUser(id: number) {
    console.log('user.service->deleteUser()');
    this.http.delete<any[]>('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe(res => {
        console.log(res);
        const index = this.users.findIndex(item => item.id === id);
        this.users.splice(index, 1);
      });
  }
}
