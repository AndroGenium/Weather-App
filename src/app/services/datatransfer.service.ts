import { Injectable } from '@angular/core';
import { CurrentWeatherService } from './WeatherApi/current-weather.service';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  CityData!: any

  async GetData(string : string){
    let data = await this.GetWeather.getCurrentWeather(string)
    return data
  }

  constructor(private GetWeather: CurrentWeatherService) 
  { 
    this.CityData = this.GetData("Tbilisi");
  }


  //by default : tbilisi mere ganaxldeba
  // anu tu arafers ar amoirchebs user da 
  //egreve ecema prognozebs gadava tbilisis pageze
  

}
