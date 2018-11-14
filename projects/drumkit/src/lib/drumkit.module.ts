import { NgModule } from "@angular/core";
import { DrumkitComponent } from "./drumkit.component";
import { ClapComponent } from "./clap/clap.component";
import { KickComponent } from "./kick/kick.component";

@NgModule({
  declarations: [DrumkitComponent, ClapComponent, KickComponent],
  imports: [],
  exports: [DrumkitComponent, ClapComponent, KickComponent]
})
export class DrumkitModule {}
