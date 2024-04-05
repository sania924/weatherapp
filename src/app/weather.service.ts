import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private apiKey = 'ad31c0802a80ea3991efe522c9a862a6'; // Replace with your OpenWeather API key

  getWeather(city: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

  // getWeather() {
  //   return this.http.get(
  //     // `https://api.openweathermap.org/data/2.5/weather?q= ${city} &{ad31c0802a80ea3991efe522c9a862a6}&units=${units}`
  //     'https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=ad31c0802a80ea3991efe522c9a862a6&units=imperi'
  //   );
  // }
  // getweather(city: string, units: string) {
  //   return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&{your_Open_API_Key}&units=' + units);
  // }
}
