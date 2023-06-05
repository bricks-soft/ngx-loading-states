import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { NgxLoadingStatesModule } from '../../../ngx-loading-states/src/lib/ngx-loading-states.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HighlightModule, NgxLoadingStatesModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: async () => await import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
