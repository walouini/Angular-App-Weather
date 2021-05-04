import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  WeaData: any[] = [];
  WeatherData:any;
  city: any;
  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {data: this.WeaData[0]},
      isDay: true
    };
    this.getWeatherData(this.city);
    console.log(this.WeaData);
  }

  getWeatherData(city:string): any {
    this.city = city;
    this.weatherService.otherForecast(this.city).subscribe(
      (response) => {
        this.WeaData.push(response);
      }
    )
  }

  setWeatherData(data: any): any {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.data.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.data.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.data.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.data.feels_like - 273.15).toFixed(0);
  }
  
}
