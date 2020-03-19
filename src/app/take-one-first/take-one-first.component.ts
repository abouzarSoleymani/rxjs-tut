import { Component, OnInit } from '@angular/core';
import {EMPTY, from, pipe} from 'rxjs';
import {first, last, map, take, takeLast} from 'rxjs/operators';

@Component({
  selector: 'app-take-one-first',
  templateUrl: './take-one-first.component.html',
  styleUrls: ['./take-one-first.component.scss']
})
export class TakeOneFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    EMPTY.pipe(
      first(),
    ).subscribe(console.log, err => console.log('Error', err));

    from([1, 2, 3, 4, 5]).pipe(
      first()
      , pipe(map(item => 'first:' + item ))
    ).subscribe(console.log, err => console.log('Error', err));

    from([1, 2, 3, 4, 5]).pipe(
      last()
      , pipe(map(item => 'last:' + item ))
    ).subscribe(console.log, err => console.log('Error', err));

    from([1, 2, 3, 4, 5]).pipe(
      take(1)
      , pipe(map(item => 'take1:' + item ))
    ).subscribe(console.log, err => console.log('Error', err));

    from([1, 2, 3, 4, 5]).pipe(
      take(5)
      , pipe(map(item => 'take5:' + item ))
    ).subscribe(console.log, err => console.log('Error', err));

  }

}
