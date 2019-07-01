import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'vr-catalog2',
  template: `
    <div class="catalog2 ">
      <vr-catalog2-form></vr-catalog2-form>
      <button (click)="search()">CERCA</button>
      <button routerLink="no-results">go to no-results</button>
      <vr-catalog2-list></vr-catalog2-list>
    </div>
  `,
  styles: []
})
export class Catalog2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    // http... o service...
    this.router.navigateByUrl('catalog/no-results');
  }
}
