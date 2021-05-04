import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class WeatherService {

  private baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

  constructor(private http: HttpClient) { }

  otherForecast(city:string){
    return this.http.get(this.baseUrl+ 'q=' + city + '&cnt=14&appid=d1f1192c61bff34c70979e832a2dbab3')
  }


}
