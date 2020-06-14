import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private _city;
    set city(name: string){
        this._city = name;
    }
    get city(){
        return this._city;
    }
    constructor(private http: HttpClient){

    }
    getWeatherData(): any {
       return this.http.get('http://api.weatherstack.com/current?access_key=a5ba2bbc44f4cef2db525bd2a4563282&query=Samara');
    }
}
