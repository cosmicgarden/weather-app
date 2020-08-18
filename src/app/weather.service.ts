import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WeatherData, WeatherToday, CityData } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // private weatherUrl = 'https://www.metaweather.com/api/location'; // URL to web api
  // private weatherUrl = '/api/'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS' }),
  };



  citySelected = new EventEmitter<number>();

  cityData: CityData = {
    title: '',
    location_type: '',
    woeid: 0,
    latt_long: '',
    timezone: ''
  }

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET CityWeather by id. Will 404 if id not found */
  getCityWeather(idCity: number): Observable<any> {
    return this.http.get(`api/location/${idCity}`, {headers: this.httpOptions.headers}).pipe(
      map((data: any) => {
        const weatherData: WeatherData = {
          cityName: data.title,
          categories: [],
          maxTemp: [],
          minTemp: [],
          temp: []
        };
        const cityData: CityData = {
          title: data.title,
          location_type: data.location_type,
          woeid: data.woeid,
          latt_long: data.latt_long,
          timezone: data.timezone
        }
        const weatherToday = data.consolidated_weather[0] as WeatherToday;
        data.consolidated_weather.forEach( day => {
          weatherData.categories.push(day.applicable_date);
          weatherData.maxTemp.push(+day.max_temp.toFixed(1));
          weatherData.minTemp.push(+day.min_temp.toFixed(1));
          weatherData.temp.push(+day.the_temp.toFixed(1));
        });
        return {weatherData, weatherToday, cityData};
      })
    );
  }

  processData(data: any) {
    return data.consolidated_weather;
  }

}
