import { Pipe, PipeTransform } from '@angular/core';
import { LoadingStateContext, loadingStates } from './core/loading-states';

@Pipe({
  name: 'isLoadingState',
})
export class IsLoadingStatePipe implements PipeTransform {
  transform(loadingStateCtx: LoadingStateContext): boolean {
    return loadingStateCtx.loadingState === loadingStates.loading;
  }
}
