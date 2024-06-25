import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { KeyService } from './key.service';

export interface WeatherResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition:{
      text: string;
      icon: string;
    }
  };
}

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  private BaseUrl = 'http://api.weatherapi.com/v1/current.json';
 

  constructor(private http: HttpClient,private Key: KeyService) { }

  async getCurrentWeather(city: string) {
    try{
      return await lastValueFrom(
        this.http.get<WeatherResponse>(`${this.BaseUrl}?key=${this.Key.ApiKey}&q=${city}`)
      )
    }
    catch(error){
      console.log(error)
      return null;
    }
  }

  async GetCurrentTempC(){
    
  }
}

