import { Component, OnInit } from '@angular/core';
import { PopularcitiesrandomService } from '../../../services/popularcitiesrandom.service';
import { CurrentWeatherService } from '../../../services/WeatherApi/current-weather.service';
import { DatatransferService } from '../../../services/datatransfer.service';
import { HistoryService } from '../../../services/WeatherApi/history.service';

@Component({
  selector: 'app-popularcities',
  templateUrl: './popularcities.component.html',
  styleUrls: ['./popularcities.component.scss']
})
export class PopularcitiesComponent implements OnInit {
  ScreenWidth: number = window.innerWidth;
  AllowedWidth: number = 500;
  Cities!: any;
  Mobile!: number;
  CitiesInfo : any[] = [];
  
 


  constructor(public RSC: PopularcitiesrandomService, private CurrentWeather : CurrentWeatherService,private Transfer : DatatransferService, private history : HistoryService)
   {

   }
   
  async GetData(string : string){
    let data = await this.CurrentWeather.getCurrentWeather(string)
    return data
  }


  async GetHistoryData(city : string, date: string, hour: string){
    let data = await this.history.getHistory(city,date, hour)
    return data
  }





  ngOnInit(): void {
    this.ScreenWidth = window.innerWidth
    if(this.ScreenWidth > this.AllowedWidth){
      this.Mobile = 3;
    }else{
      this.Mobile = 1;
    }

    this.Cities = this.RSC.GetCityArray(this.Mobile)

    while(this.CitiesInfo.length < this.Mobile){
      this.CitiesInfo.push(this.GetData(this.Cities[this.CitiesInfo.length]))
      

    }
    console.log(this.CitiesInfo)
    
  }

  TransferCityData(i:number): void {
    this.Transfer.CityData = this.CitiesInfo[i]
    
    this.Transfer.CityDataMorning = this.GetHistoryData(this.Cities[i],this.Transfer.formattedDate, "9")
    this.Transfer.CityDataAfternoon = this.GetHistoryData(this.Cities[i],this.Transfer.formattedDate, "14")
    this.Transfer.CityDataEvening = this.GetHistoryData(this.Cities[i],this.Transfer.formattedDate, "19")
    this.Transfer.CityDataOvernight = this.GetHistoryData(this.Cities[i],this.Transfer.formattedDate, "23")
  }
}

