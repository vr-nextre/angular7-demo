import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-alert',
  template: `
    <div class="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .alert{
    background: red;
    color:#FFF;
    border-radius: 20px;
    padding: 10px;
  }
  `]
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
