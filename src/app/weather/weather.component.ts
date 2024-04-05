import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  TodayDate!: string | number | Date;
  cityName: any;
  transform() {
    throw new Error('Method not implemented.');
  }
  weatherData: any;
  changeLocation() {
    throw new Error('Method not implemented.');
  }
  getWeatherDataByCity() {
    throw new Error('Method not implemented.');
  }
  // myWeather: any;
  // temperature: number = 0;
  // feelsLikeTemp: number = 0;
  // humidity: number = 0;
  // pressure: number = 0;
  // summary: string = '';
  // iconURL: string = '';
  // city: string = 'Minneapolis';
  // //units: string = 'metric'
  // units: string = 'imperial';
  constructor(private _service: WeatherService) {}
  ngOnInit(): void {
    // this.getweather();
  }
  // getweather() {
  //   this._service.getWeather().subscribe((weather) => {
  //     console.log(weather);
  //     this.myWeather = weather;
  //     console.log(this.myWeather);
  //   });
  // }
}
