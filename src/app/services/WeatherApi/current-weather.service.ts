import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';
  private apiKey = '15764315b50f4622b88125232240506';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`);
  }
}