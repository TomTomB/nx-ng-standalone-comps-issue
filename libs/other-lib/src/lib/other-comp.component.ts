import { Component } from '@angular/core';

@Component({
  selector: 'test-org-other-comp',
  template: `
    <h1>Other Comp</h1>
    <test-org-my-comp></test-org-my-comp>
  `,
})
export class OtherCompComponent {}
