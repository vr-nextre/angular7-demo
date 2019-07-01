import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-catalog2',
  template: `
    <div class="catalog2 ">
      <vr-catalog2-form></vr-catalog2-form>
      <vr-catalog2-list></vr-catalog2-list>
    </div>
  `,
  styles: []
})
export class Catalog2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
