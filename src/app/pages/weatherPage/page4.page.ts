import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  weather:any = [];
  temperature:any = [];
  wind:any = [];

  converted: number = this.temperature.temp - 273.15;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.service.getWeatherData().subscribe((data => {
      // what to do after data retreived
      this.weather = data.weather;  // derived from "weather" in json
      this.temperature = data.main; // derived from "main":{"temp,...,..."}
      this.wind = data.wind;        // derived from "wind"

      console.log(this.weather);

     this.convertToCelsius(this.temperature.temp);
    }));
  }

  // doesn't do anything really
  convertToCelsius(temp){

    var newTemp, newRF;
    newTemp = this.temperature.temp - 273.15;
    newRF = this.temperature.feels_like - 273.15;
    newTemp.toFixed(2);
    // newTemp.round(2);
    this.temperature.temp = newTemp;
    this.temperature.feels_like = newRF;

  }


}
