import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "kick",
  template: `
    <div (click)="kick()">kick</div>
  `,
  styles: [
    `
      :host {
        display: table-cell;
      }
      div {
        border-radius: 50%;
        top: 0rem;
        position: absolute;
        line-height: 50rem;
        text-align: center;
        font-size: 12rem;
        height: 50rem;
        width: 50rem;
        margin: 2rem;
        color: whitesmoke;
        outline: 0;
        background: rgb(75, 75, 73);
        background: radial-gradient(
          circle,
          #131313 66%,
          #7d7d7a 67%,
          #2f2f2e 68%
        );
      }
    `
  ]
})
export class KickComponent implements OnInit {
  @Input() frequency: number = 150;
  constructor() {}

  ngOnInit() {}

  kick() {
    let context = new AudioContext();
    let osc = context.createOscillator();
    let gain = context.createGain();
    osc.frequency.setValueAtTime(this.frequency, 0);
    osc.frequency.exponentialRampToValueAtTime(0.01, 0 + 0.5);
    gain.gain.setValueAtTime(3, 0);
    gain.gain.exponentialRampToValueAtTime(0.01, 0.5);
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start();
    osc.stop(0.5);
  }
}
