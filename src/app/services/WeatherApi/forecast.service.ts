import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { KeyService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private baseURL = 'http://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient, private Key: KeyService ) { }

  getCurrentWeather(location: string, days: number): Observable<any> {
    const params = new HttpParams()
      .set('key', this.Key.ApiKey)
      .set('q', location)
      .set('days', days)
      

    return this.http.get(this.baseURL, { params });
  }
}
