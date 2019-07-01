import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vr-login',
  template: `
    <p>
      login works!
    </p>
    <vr-alert>ATTENZION: ...</vr-alert>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
