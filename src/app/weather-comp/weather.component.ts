import { Component } from "@angular/core";
import { WeatherService } from '../services/weather.sevice';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
   constructor(private service: WeatherService){
     this.service.city = "Певек";
     this.service.getWeatherData().subscribe( (data) => {
         console.log(data);
     });
   }
  
   public city = this.service.city;
}