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

  currentDate !:any
  year !:any
  month !:any
  day !:any
  hours !:any
  minutes !:any
  seconds !:any
  formattedDate !:any
  formattedDateSeconds!:any


  constructor(private GetWeather: CurrentWeatherService, private history: HistoryService) 
  { 
    this.currentDate = new Date();
    this.year = this.currentDate.getFullYear();
    this.month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    this.day = this.currentDate.getDate().toString().padStart(2, '0');
    this.hours = this.currentDate.getHours().toString().padStart(2, '0');
    this.minutes = this.currentDate.getMinutes().toString().padStart(2, '0');
    this.seconds = this.currentDate.getSeconds().toString().padStart(2, '0');
    
    this.formattedDate = `${this.year}-${this.month}-${this.day}`;
    this.formattedDateSeconds = `${this.year}-${this.month}-${this.day} ${this.hours}:${this.minutes}:${this.seconds}`;

    this.CityData = this.GetData("Tbilisi");
    this.CityDataMorning = this.GetHistoryData("Tbilisi",this.formattedDate, "9")
    this.CityDataAfternoon = this.GetHistoryData("Tbilisi",this.formattedDate, "14")
    this.CityDataEvening = this.GetHistoryData("Tbilisi",this.formattedDate, "19")
    this.CityDataOvernight = this.GetHistoryData("Tbilisi",this.formattedDate, "23")
  }


  //by default : tbilisi mere ganaxldeba
  // anu tu arafers ar amoirchebs user da 
  //egreve ecema prognozebs gadava tbilisis pageze
  

}
