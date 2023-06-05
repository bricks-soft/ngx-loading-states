import { Pipe, PipeTransform } from '@angular/core';
import { LoadingStateContext, loadingStates } from './core/loading-states';

@Pipe({
  name: 'isEmptyState',
})
export class IsEmptyStatePipe implements PipeTransform {
  transform(loadingStateCtx: LoadingStateContext): boolean {
    return loadingStateCtx.loadingState === loadingStates.empty;
  }
}
