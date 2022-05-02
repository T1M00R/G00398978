import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  // Makes http request to get weather data
  getWeatherData():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=40f291857e48365a830ab8621e973bc7');
  }

}
