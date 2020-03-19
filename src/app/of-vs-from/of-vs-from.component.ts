import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';

@Component({
  selector: 'app-of-vs-from',
  templateUrl: './of-vs-from.component.html',
  styleUrls: ['./of-vs-from.component.scss']
})
export class OfVsFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    of([1, 2, 3]).subscribe(x => console.log('item:' + x));
    from([1, 2, 3]).subscribe(x => console.log('item:' + x));
  }

}
