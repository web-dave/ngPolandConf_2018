- ng new ngPolandConf
- ng g library drumkit

#

### set defaults at angular.json

```json
      "schematics": {
        "@schematics/angular:component": {
          "export": true,
          "styleext": "scss",
          "flat": true
        }
      },
```

- ng g c clap --project drumkit -d
- ng g c kick --project drumkit -d
- ng build drumkit

```TypeScript
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
```

```TypeScript
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

```
