import { Component } from '@angular/core';
import { CurrentWeatherService } from '../../../services/WeatherApi/current-weather.service';
import { SearchService } from '../../../services/WeatherApi/search.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  MenuMode: boolean = false;
  InputLive!:any
  InputConfirmed!:string;
  SearchedCityData !:any
  CityFound !:any

  constructor(private WeatherSearcher: SearchService){}
  
  async SearchCity(string : string){
    let data = await this.WeatherSearcher.SearchWeather(string);
    return data
  }


  ConfirmInput():void{
    this.InputConfirmed = this.InputLive  
    console.log(this.InputConfirmed)
    this.CityFound =  this.SearchCity(this.InputConfirmed)
    console.log(this.CityFound)
    setTimeout(() => {
      if(this.CityFound.__zone_symbol__state !== null){
        alert("Nice")
      }else if (this.CityFound.__zone_symbol__state == null){
        alert("nope")
        // gadadis saitze
      }
    }, 1200);

  }

  

  ChangeMode():void{
    this.MenuMode = !this.MenuMode;
  }


}
