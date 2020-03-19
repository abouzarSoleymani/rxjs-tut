import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RxTimerComponent } from './rx-timer/rx-timer.component';
import { DebounceDistinctComponent } from './debounce-distinct/debounce-distinct.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MapThrottleComponent } from './map-throttle/map-throttle.component';
import { ScanComponent } from './scan/scan.component';
import { OfVsFromComponent } from './of-vs-from/of-vs-from.component';
import { TakeOneFirstComponent } from './take-one-first/take-one-first.component';

@NgModule({
  declarations: [
    AppComponent,
    RxTimerComponent,
    DebounceDistinctComponent,
    MergeMapComponent,
    MapThrottleComponent,
    ScanComponent,
    OfVsFromComponent,
    TakeOneFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
