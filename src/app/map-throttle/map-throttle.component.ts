import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {take, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-map-throttle',
  templateUrl: './map-throttle.component.html',
  styleUrls: ['./map-throttle.component.scss']
})
export class MapThrottleComponent implements OnInit {
  throttleValue;
  constructor() { }
  ngOnInit() {
    this.throttle();
  }

 throttle() {
   // emit value every 1 second
   const source = interval(1000);
   /* emit the first value, then ignore for 2 seconds. repeat... */
   // take count emitted value then complete
   const example = source.pipe(throttleTime(2000), take(2));
  // output: 0...6...12
   const subscribe = example.subscribe(val => this.throttleValue = val);
 }
}
