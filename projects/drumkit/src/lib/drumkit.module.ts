import { NgModule } from '@angular/core';
import { DrumkitComponent } from './drumkit.component';
import { ClapComponent } from './clap/clap.component';
import { TomComponent } from './tom/tom.component';
import { KickComponent } from './kick/kick.component';

@NgModule({
  declarations: [DrumkitComponent, ClapComponent, TomComponent, KickComponent],
  imports: [
  ],
  exports: [DrumkitComponent]
})
export class DrumkitModule { }
