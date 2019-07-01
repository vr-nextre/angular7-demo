import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'vr-login',
  template: `
    <p>
      login works!
    </p>
    <vr-alert>ATTENZION: ...</vr-alert>
    <hr>
    bottone animato
    <vr-animated-button (click)="doAction()" [selected]="active === 'one'">BOTTONE 1</vr-animated-button>
    <br>
    <vr-animated-button (click)="doAction2()" [selected]="active==='two'">BOTTONE 2</vr-animated-button>

    <br><br>
    <hr>
    <p>Bottoni dinamici</p>
    <div>
      <vr-animated-button
        *ngFor="let item of sections"
        (click)="active2=item"
        [selected]="item.id===active2.id">
        {{item.label}}
      </vr-animated-button>
    </div>
    <div class="details">
      <pre>{{active2 | json}}</pre>
    </div>
    <vr-animated-text [testo]="active2.text"></vr-animated-text>
  `,
  styles: []
})
export class LoginComponent implements OnInit {


  sections = [
    {id: 1, label: 'UNO', text: '1 bla bla bla 1'},
    {id: 2, label: 'DUE', text: '2 bla bla bla 2'},
    {id: 3, label: 'TRE', text: '3 bla bla bla 3'}
  ];

  active: string = 'one';
  active2 = this.sections[0];


  constructor() {
  }

  ngOnInit() {
  }

  doAction() {
    console.log('cliccato!');
    this.active = 'one';
  }

  doAction2() {
    console.log('bottone2');
    this.active = 'two';
  }
}
