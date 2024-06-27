
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentWeatherService } from '../../../services/WeatherApi/current-weather.service';
import { SearchService } from '../../../services/WeatherApi/search.service';
import { timeout } from 'rxjs';
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
  currentDate !:any
  year !:any
  month !:any
  day !:any
  hours !:any
  minutes !:any
  seconds !:any
  formattedDate !:any
  formattedDateSeconds!:any

  constructor(private WeatherSearcher: SearchService, private Transport: DatatransferService, private currentweather: CurrentWeatherService, private router: Router, private history : HistoryService)
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
    

  }
  
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

          this.Transport.CityDataMorning = this.GetHistoryData(this.CityConfirmed[0].name,this.formattedDate, "9")
          this.Transport.CityDataAfternoon = this.GetHistoryData(this.CityConfirmed[0].name,this.formattedDate, "14")
          this.Transport.CityDataEvening = this.GetHistoryData(this.CityConfirmed[0].name,this.formattedDate, "19")
          this.Transport.CityDataOvernight = this.GetHistoryData(this.CityConfirmed[0].name,this.formattedDate, "23")

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
