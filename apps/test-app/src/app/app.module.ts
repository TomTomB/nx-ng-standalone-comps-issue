import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OtherLibModule } from '@test-org/other-lib';
import { STANDALONE_COMPS } from '@test-org/some-lib';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, OtherLibModule, STANDALONE_COMPS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
