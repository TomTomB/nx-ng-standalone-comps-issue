import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCompComponent } from './other-comp.component';
import { STANDALONE_COMPS } from '@test-org/some-lib';

@NgModule({
  imports: [CommonModule, ...STANDALONE_COMPS],
  declarations: [OtherCompComponent],
  exports: [OtherCompComponent],
})
export class OtherLibModule {}
