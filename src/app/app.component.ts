import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ConfigService} from './services/config.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'vr-root',
  template: `
    <div class="container">
      <vr-navbar></vr-navbar>
      <h1 [style.color]="configService.theme"
      >Hello {{configService.theme}}</h1>
      <button (click)="setTheme('red')">red</button>
      <button (click)="setTheme('green')">green</button>
    </div>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {

  theme: string;

  // quando inittiamo una dipendenza essa sarà disponibile solo nel costruttore
  // quindi fare una referenza locale ed assegnarla per poterla utilizzare anche fuori
  // oppure usare il modificatore TS private/public
  constructor(router: Router, public configService: ConfigService) {

    // cartella envirorments e scegliere il profilo di interesse
    console.log(environment.url);

    this.theme = configService.theme;

    // traccio ogni evento di cambio pagina per google analytics
    // navigationEnd è la destinazione
    // non mi serve vedere tutti gli eventi però
    // tramite rxJs filtro e uso solo gli eventi che mi servono
    router
      .events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((res: NavigationEnd) => console.log(res.url));
  }

  setTheme(value: string) {
    this.configService.setTheme(value);
  }
}
