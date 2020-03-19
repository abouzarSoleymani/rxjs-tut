import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-debounce-distinct',
  templateUrl: './debounce-distinct.component.html',
  styleUrls: ['./debounce-distinct.component.scss']
})
export class DebounceDistinctComponent implements OnInit {

  searchTerm$ = new Subject<string>();
  constructor() {
    this.searchTerm$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(data => console.log(data))
  }

  ngOnInit() {
  }

  search(value) {
    this.searchTerm$.next(value)
  }
}
