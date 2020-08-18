import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { WeatherToday } from '../weather-data';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit, OnChanges {
  @Input() weatherToday: WeatherToday;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('chnages', changes.weatherToday.currentValue);
  }

}
