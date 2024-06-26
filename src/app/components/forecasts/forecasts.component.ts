import { Component } from '@angular/core';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrl: './forecasts.component.scss'
})
export class ForecastsComponent {
  ScreenWidth: number = window.innerWidth;
  AllowedWidth: number = 1050;
  Mobile: boolean = false;
  constructor(){
    
    if(this.ScreenWidth > this.AllowedWidth){
      this.Mobile = false;
    }else{
      this.Mobile = true;
    }
  }
}
