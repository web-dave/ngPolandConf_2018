import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "clap",
  template: `
    <div (click)="clap()">clap</div>
  `,
  styles: [
    `
      :host {
        display: table-cell;
      }
      div {
        border-radius: 50%;
        height: 50rem;
        width: 50rem;
        margin: 2rem;
        text-align: center;
        line-height: 50rem;
        text-align: center;
        font-size: 12rem;
        outline: 0;
        background: rgb(149, 154, 18);
        background: radial-gradient(
          circle,
          rgba(149, 154, 18, 1) 0%,
          rgba(238, 236, 20, 1) 44%,
          rgba(179, 180, 13, 1) 47%
        );
      }
    `
  ]
})
export class ClapComponent implements OnInit {
  @Input() frequency: number = 1000;
  constructor() {}

  ngOnInit() {}

  clap() {
    let context = new AudioContext();
    let noiseBuffer = context.createBuffer(1, 44100, 44100);
    let noiseBufferOutput = noiseBuffer.getChannelData(0);
    for (var i = 0; i < 44100; i++) {
      noiseBufferOutput[i] = Math.random() * 2 - 1;
    }
    let noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    let noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = this.frequency;
    noise.connect(noiseFilter);
    let noiseEnvelope = context.createGain();
    noiseFilter.connect(noiseEnvelope);
    noiseEnvelope.connect(context.destination);
    noiseEnvelope.gain.setValueAtTime(0.7, 0);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.5, 0.05);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, 0.1);
    noise.start();
    noise.stop(0.1);
  }
}
