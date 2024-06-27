import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private BaseUrl = 'http://api.weatherapi.com/v1/history.json';
 

  constructor(private http: HttpClient,private Key: KeyService) { }

  async getHistory(city: string, date: string, hour: string){
    try{
      return await lastValueFrom(
        this.http.get(`${this.BaseUrl}?key=${this.Key.ApiKey}&q=${city}&dt=${date}&hour=${Number(hour)}`)
      )
    }
    catch(error){
      console.log(error)
      return null;
    }
  }
}
