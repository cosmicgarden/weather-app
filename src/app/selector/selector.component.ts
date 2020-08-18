import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  
  cities = [{name: 'Bogotá', id: 368148}, {name: 'Chicago', id: 2379574}, {name: 'Tokyo', id: 1118370}, {name: 'Buenos Aires', id: 468739}];

  property = {
    city: undefined
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.property.city = 368148;
  }

  changeCity(event) {
    console.log('event', event.target.value);
    console.log('this property', this.property.city);
    this.weatherService.citySelected.emit(event.target.value);
  }

}
