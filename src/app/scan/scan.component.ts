import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, of, timer} from 'rxjs';
import {concatMap, delay, filter, mapTo, pairwise, pluck, reduce, scan, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  value = [];
  constructor() { }

  ngOnInit() {
    this.scanning();
  }
  scanning() {
    const source = of(1, 2, 3, 4, 5);
    // basic scan example, sum over time starting with zero
    //reduce only final value scan every value in iterate
   // const example = source.pipe(reduce((acc, curr) => acc + curr, 0)
    const example = source.pipe(scan((acc, curr) => acc + curr, 0), pairwise()
    , concatMap(item => timer(1000).pipe(mapTo(item))),
    );
    // log accumulated values
    // output: 1,3,6
    const subscribe = example.subscribe(val => this.value.push(val));
  }
}
