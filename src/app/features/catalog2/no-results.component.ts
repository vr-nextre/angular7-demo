import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'vr-no-results',
  template: `
    <p>
      no-results!
    </p>
    <!-- <button (click)="back()"><- BACK TO CATALOG</button> -->
    <!-- <button routerLink="/catalog"><- BACK TO CATALOG</button> -->
    <button routerLink="../"><- BACK TO CATALOG</button>
  `,
  styles: []
})
export class NoResultsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('catalog');
  }

}
