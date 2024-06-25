import { Component, OnInit } from '@angular/core';
import { PopularcitiesrandomService } from '../../../services/popularcitiesrandom.service';
import { CurrentWeatherService } from '../../../services/WeatherApi/current-weather.service';

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
  
 


  constructor(public RSC: PopularcitiesrandomService, private CurrentWeather : CurrentWeatherService)
   {

   }
   
  async GetData(string : string){
    let data = await this.CurrentWeather.getCurrentWeather(string)
    let Data = data?.current
    return Data
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
}

