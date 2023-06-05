import { Component } from '@angular/core';
import { delay, map, of, switchMap } from 'rxjs';
import {
  LoadingStatesBSubject,
  startLoading,
  updateLoading,
} from '../../../ngx-loading-states/src/lib/core/loading-states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  exampleALoadingStates$ = new LoadingStatesBSubject();

  exampleALoadExample$ = of(null).pipe(
    startLoading(this.exampleALoadingStates$),
    switchMap(() => {
      return of(
        'like some async observable | http request call as an example'
      ).pipe(
        delay(3 * 1000),
        updateLoading(this.exampleALoadingStates$, { swallowError: true }),
        map(() => 'RETRIEVED DATA')
      );
    })
  );
}
