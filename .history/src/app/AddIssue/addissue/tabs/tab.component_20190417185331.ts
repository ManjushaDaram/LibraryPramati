import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  @Input() tabTitle;
}
