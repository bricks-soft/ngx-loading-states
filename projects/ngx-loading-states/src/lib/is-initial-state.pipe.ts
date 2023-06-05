import { Pipe, PipeTransform } from '@angular/core';
import { LoadingStateContext, loadingStates } from './core/loading-states';

@Pipe({
  name: 'isInitialState',
})
export class IsInitialStatePipe implements PipeTransform {
  transform(loadingStateCtx: LoadingStateContext): boolean {
    return loadingStateCtx.loadingState === loadingStates.initial;
  }
}
