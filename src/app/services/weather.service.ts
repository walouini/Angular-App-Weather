import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class WeatherService {

  private baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiKey = 'd1f1192c61bff34c70979e832a2dbab3';
  constructor(private http: HttpClient) { }

  otherForecast(city:string){
    return this.http.get('/daily?' + this.baseUrl+ 'q=' + city + '&cnt=14&appid=' + this.apiKey)
  }

  getWeatherForecast(){
    return new Observable((observer)=> {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position)
        },
        (error) => {
          observer.next(error)
        }
      )
    }).pipe(
      map( (value:any)=> {
        return new HttpParams()
        .set('lon', value.coords.longitude)
        .set('lat', value.coords.latitude)
        .set('units', 'imperial')
        .set('appid', this.apiKey)
      }),
      switchMap((values:any) => {
        return this.http.get(this.baseUrl, {params: values})
      })
    )
  }


}
