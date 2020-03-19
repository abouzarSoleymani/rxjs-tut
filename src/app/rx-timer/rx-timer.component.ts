import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable, Subject, timer} from 'rxjs';
import {repeatWhen, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-rx-timer',
  templateUrl: './rx-timer.component.html',
  styleUrls: ['./rx-timer.component.scss']
})
export class RxTimerComponent implements OnInit {
  observable$: Observable<any>;
  timer;
  private readonly _stop = new Subject<void>();
  private readonly _start = new Subject<void>();

  constructor() {
    this.initStart(1000)
  }
  initStart(delay) {
    this.observable$ = timer(0, delay)
      .pipe(
        takeUntil(this._stop)
        , repeatWhen(() => this._start)
      );
  }


  start(): void {
    this.stop();
    this._start.next();
    this.observable$.subscribe(data => this.timer = data);
  }

  stop(): void {
    this._stop.next();
  }

  ngOnInit(): void {
  }

}

// const caller = new RxTimerComponent(1000);
// caller.observable$.subscribe((item) => console.log(item));
//
// fromEvent(document.querySelector('#stop'), 'click')
//   .subscribe(() => caller.stop());
// fromEvent(document.querySelector('#start'), 'click')
//   .subscribe(() => caller.start());
//
//

