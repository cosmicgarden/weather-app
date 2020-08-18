import { Component, OnInit, Input } from '@angular/core';

import { CityData } from '../weather-data';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() cityData: CityData;

  constructor() { }

  ngOnInit(): void {
  }

}
