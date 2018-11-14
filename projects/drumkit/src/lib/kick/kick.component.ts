import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "kick",
  templateUrl: "./kick.component.html",
  styleUrls: ["./kick.component.scss"]
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
