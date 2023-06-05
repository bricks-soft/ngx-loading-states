import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxLoadingStatesSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
