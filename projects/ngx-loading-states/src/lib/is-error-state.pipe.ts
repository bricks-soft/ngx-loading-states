import { Pipe, PipeTransform } from '@angular/core';
import { LoadingStateContext, loadingStates } from './core/loading-states';

@Pipe({
  name: 'isErrorState',
})
export class IsErrorStatePipe implements PipeTransform {
  transform(loadingStateCtx: LoadingStateContext): boolean {
    return loadingStateCtx.loadingState === loadingStates.error;
  }
}
