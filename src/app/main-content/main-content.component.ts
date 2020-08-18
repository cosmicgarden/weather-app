import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnChanges {
  @Input() weatherData: WeatherData;

  highcharts = Highcharts;
  updateFlag = false;
  chart;
  chartCallback;
  chartOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Loading...',
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    plotOptions: {
      series: {
         dataLabels: {
            enabled: true
         }
      }
   },
    tooltip: {
      valueSuffix: ' °C',
    },
    series: []
  };

  constructor(private weatherService: WeatherService) { 
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
      self.chart = chart;
    };
  }

  ngOnInit(): void {
    // this.getData();
  }

  // getData(): void {
  //   this.weatherService.getCityWeather(368148).subscribe(weatherData => {
  //     console.log('data!!->>>', weatherData);
  //     const self = this;
  //     const chart = this.chart;
  //     // chart.showLoading();
  //     self.chartOptions.series = [
  //       {
  //         name: 'Min Temp',
  //         data: weatherData.chartData.minTemp
  //       },
  //       {
  //         name: 'Max Temp',
  //         data: weatherData.chartData.maxTemp
  //       },
  //       {
  //         name: 'Temp',
  //         data: weatherData.chartData.temp
  //       }
  //     ];
  //     self.updateFlag = true;
  //   });
  // }

  ngOnChanges(changes: SimpleChanges) {
    const chartData = changes.weatherData.currentValue;
    if (chartData) {
      const self = this;
      const chart = this.chart;
      self.chartOptions.xAxis.categories = this.weatherData.categories;
      self.chartOptions.title.text = `${this.weatherData.cityName} Weekly Temperature`;
      self.chartOptions.series = [
        {
          name: 'Min Temp',
          data: this.weatherData.minTemp
        },
        {
          name: 'Max Temp',
          data: this.weatherData.maxTemp
        },
        {
          name: 'Temp',
          data: this.weatherData.temp
        }
      ];
      self.updateFlag = true;
    }
  }

}
