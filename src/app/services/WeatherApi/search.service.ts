import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { KeyService } from './key.service';
export interface WeatherSearchResponse {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private BaseUrl = 'http://api.weatherapi.com/v1/search.json';

  constructor(private http: HttpClient, private Key: KeyService ) { }

  async SearchWeather(city: string) {
    try{
      return await lastValueFrom(
        this.http.get<WeatherSearchResponse>(`${this.BaseUrl}?key=${this.Key.ApiKey}&q=${city}`)
      )
    }
    catch(error){
      console.log(error)
      return null;
    }
  }
}
