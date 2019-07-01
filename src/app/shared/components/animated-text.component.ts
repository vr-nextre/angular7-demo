import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'vr-animated-text',
  animations: [
    trigger('animaTesto', [
      state('show', style({
        opacity: 1,
        marginTop: 0
      })),
      state('hide', style({
        opacity: 0,
        marginTop: '50px'
      })),
      transition('show <=> hide', [
        animate('0.7s cubic-bezier(0.645, 0.045, 0.355, 1)')
      ])
    ])
  ],
  template: `
    <p [@animaTesto]="state"
        (@animaTesto.done)="showNext($event)"
    >
      {{ textToShow}}
    </p>
  `,
  styles: []
})
export class AnimatedTextComponent implements OnInit, OnChanges {

  state = 'show';
  textToShow: string;

  @Input() testo: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed')
    if (changes.testo.isFirstChange()) {
      this.textToShow = changes.testo.currentValue;
    } else {
      this.state = 'hide';
    }
  }

  showNext(event: AnimationEvent) {
    console.log(event)
    if (event.toState === 'hide') {
      this.state = 'show';
      this.textToShow = this.testo;
    }
  }
}
