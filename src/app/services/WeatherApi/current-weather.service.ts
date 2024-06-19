import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { KeyService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  private baseURL = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient, private Key: KeyService) { }

  getCurrentWeather(location: string,){
    const params = new HttpParams()
      .set('key', this.Key.ApiKey)
      .set('q', location)
      

    return this.http.get(this.baseURL, { params });
  }
}
