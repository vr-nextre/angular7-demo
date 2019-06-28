import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'vr-navbar',
  template: `
    <ul class="nav justify-content-center">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="home">Home</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="users">Utenti</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="devices">Dispositivi</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="galleria">Gallery</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="catalog">Catalog</a>
      </li>
    </ul>
  `,
  styles: [`
    .active .nav-link {
      color: #004085;
      font-weight: bold;
    }

    .nav {
      border-bottom: 1px solid #999;
      margin-bottom: 15px;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(activedRoute: ActivatedRoute, router: Router) {
  }

  ngOnInit() {
  }

}
