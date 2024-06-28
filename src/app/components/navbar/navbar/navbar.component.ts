
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CurrentWeatherService } from '../../../services/WeatherApi/current-weather.service';
import { SearchService } from '../../../services/WeatherApi/search.service';
import { filter, timeout } from 'rxjs';
import { DatatransferService } from '../../../services/datatransfer.service';
import { HistoryService } from '../../../services/WeatherApi/history.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  MenuMode: boolean = false;
  InputLive!:any
  CityConfirmed!:any;
  SearchedCityData !:any
  CityFound !:any
  currentRoute!: string;

  constructor(private WeatherSearcher: SearchService, private Transport: DatatransferService, private currentweather: CurrentWeatherService, private router: Router, private history : HistoryService)
  { }
  
  async SearchCity(string : string){
    let data = await this.WeatherSearcher.SearchWeather(string);
    return data
  }

  async GetData(string : string){
    let data = await this.currentweather.getCurrentWeather(string)
    return data
  }

  async GetHistoryData(city : string, date: string, hour: string){
    let data = await this.history.getHistory(city,date, hour)
    return data
  }


  ConfirmInput() {
    console.log(this.InputLive);
    this.SearchCity(this.InputLive)

      .then(city => {
        this.CityFound = city;
        if(this.CityFound.length == 1){
          this.CityConfirmed = this.CityFound
          console.log(this.CityConfirmed)

          this.Transport.CityData = this.GetData(this.CityConfirmed[0].name)

          this.Transport.CityDataMorning = this.GetHistoryData(this.CityConfirmed[0].name,this.Transport.formattedDate, "9")
          this.Transport.CityDataAfternoon = this.GetHistoryData(this.CityConfirmed[0].name,this.Transport.formattedDate, "14")
          this.Transport.CityDataEvening = this.GetHistoryData(this.CityConfirmed[0].name,this.Transport.formattedDate, "19")
          this.Transport.CityDataOvernight = this.GetHistoryData(this.CityConfirmed[0].name,this.Transport.formattedDate, "23")

          console.log(this.Transport.CityData)

          this.router.navigate(['/CityOverview']);
          
        }else{
          alert("City not found")
        } // Log here, after the promise resolves
      })
      .catch(error => {
        alert("Please Try Again");
      });
  }
  

  

  ChangeMode():void{
    this.MenuMode = !this.MenuMode;
  }


}
