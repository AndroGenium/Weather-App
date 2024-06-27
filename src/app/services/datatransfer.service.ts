import { Injectable } from '@angular/core';
import { CurrentWeatherService } from './WeatherApi/current-weather.service';
import { HistoryService } from './WeatherApi/history.service';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  CityData!: any
  CityDataMorning!: any
  CityDataAfternoon!: any
  CityDataEvening!: any
  CityDataOvernight!: any
  async GetData(string : string){
    let data = await this.GetWeather.getCurrentWeather(string)
    return data
  }

  async GetHistoryData(city : string, date: string, hour: string){
    let data = await this.history.getHistory(city,date, hour)
    return data
  }



  constructor(private GetWeather: CurrentWeatherService, private history: HistoryService) 
  { 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    const formattedDateSeconds = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    this.CityData = this.GetData("Tbilisi");
    this.CityDataMorning = this.GetHistoryData("Tbilisi",formattedDate, "9")
    this.CityDataAfternoon = this.GetHistoryData("Tbilisi",formattedDate, "14")
    this.CityDataEvening = this.GetHistoryData("Tbilisi",formattedDate, "19")
    this.CityDataOvernight = this.GetHistoryData("Tbilisi",formattedDate, "23")
  }


  //by default : tbilisi mere ganaxldeba
  // anu tu arafers ar amoirchebs user da 
  //egreve ecema prognozebs gadava tbilisis pageze
  

}
