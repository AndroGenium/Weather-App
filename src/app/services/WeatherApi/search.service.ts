import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { KeyService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseURL = 'http://api.weatherapi.com/v1/search.json';

  constructor(private http: HttpClient, private Key: KeyService ) { }

  getCurrentWeather(Input: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.Key.ApiKey)
      .set('q', Input)
      

    return this.http.get(this.baseURL, { params });
  }
}
