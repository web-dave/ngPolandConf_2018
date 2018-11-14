import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DrumkitModule } from "drumkit";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DrumkitModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
