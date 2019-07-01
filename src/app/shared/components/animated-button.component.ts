import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {template} from '@angular/core/src/render3';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'vr-animated-button',
  animations: [
    trigger('buttonAnimated1', [
      state('over', style({backgroundColor: 'red', transform: 'scale(1.3) rotate(20deg)'})),
      state('out', style({backgroundColor: 'white', transform: 'scale(1) rotate(0deg)'})),
      state('selected', style({backgroundColor: 'yellow'})),
      transition('out <=> over', [animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')]),
      transition('* <=> selected', [
        // https://easings.net/
        animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)') // back
      ])
    ])
  ],
  template: `
    <button class="bottone"
            [@buttonAnimated1]="state"
            (mouseover)="state = 'over' "
            (mouseout)="state = 'out' "
            [disabled]="selected"

    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnInit, OnChanges {

  @Input() selected = false;
  state: any = 'out';


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.selected) {
      this.state = changes.selected.currentValue ? 'selected' : 'out';
    }

  }

}
