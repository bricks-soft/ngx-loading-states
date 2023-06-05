import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgxLoadingStatesSampleService } from './sample.service';

@Component({
  selector: 'ngx-loading-states-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoadingStatesSampleComponent {
  constructor(public sampleService: NgxLoadingStatesSampleService) {}
}
