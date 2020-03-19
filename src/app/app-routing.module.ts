import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxTimerComponent} from './rx-timer/rx-timer.component';
import {DebounceDistinctComponent} from './debounce-distinct/debounce-distinct.component';
import {MergeMapComponent} from './merge-map/merge-map.component';
import {MapThrottleComponent} from './map-throttle/map-throttle.component';
import {ScanComponent} from './scan/scan.component';
import {OfVsFromComponent} from './of-vs-from/of-vs-from.component';
import {TakeOneFirstComponent} from './take-one-first/take-one-first.component';
const routes: Routes = [
  {path: 'rx-timer', component: RxTimerComponent},
  {path: 'deb-until', component: DebounceDistinctComponent},
  {path: 'merge', component: MergeMapComponent},
  {path: 'm-th', component: MapThrottleComponent},
  {path: 'scan', component: ScanComponent},
  {path: 'of-from', component: OfVsFromComponent},
  {path: 'take-first', component: TakeOneFirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
