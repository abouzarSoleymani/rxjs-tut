import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  firstName = new Subject();
  lastName = new Subject();
  name: string;
  constructor() {
    this.firstName.pipe(mergeMap(first =>  this.lastName.pipe(map(last => first + '  ' + last )))).subscribe(name => this.name = name)
  }

  ngOnInit() {
  }

}
