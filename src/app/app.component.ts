import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherToday, WeatherData, CityData } from './weather-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weatherToday: WeatherToday;
  weatherData: WeatherData;
  cityData: CityData;
  title = 'weather-app';
  constructor(private weatherService: WeatherService){}

  ngOnInit() {
    this.getData(368148);
    this.weatherService.citySelected.subscribe(
      (data: any) => {
        this.getData(data);
      }
    );
  }

  getData(idCity: number): void {
    this.weatherService.getCityWeather(idCity).subscribe(data => {
      console.log('data!!!', data);
      this.weatherData = data.weatherData;
      this.weatherToday = data.weatherToday;
      this.cityData = data.cityData;
    });
  }
}
