import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { WorkerCardComponent } from './worker-card/worker-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    WorkerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
