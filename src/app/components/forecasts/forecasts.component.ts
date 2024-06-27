import { Component } from '@angular/core';
import { ScrollToElementService } from '../../services/scroll-to-element.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrl: './forecasts.component.scss'
})
export class ForecastsComponent {
  ScreenWidth: number = window.innerWidth;
  AllowedWidth: number = 1050;
  Mobile: boolean = false;
  constructor(private scrollService: ScrollToElementService){
    
    if(this.ScreenWidth > this.AllowedWidth){
      this.Mobile = false;
    }else{
      this.Mobile = true;
    }
  }
  scrollToSection(element:string) {
    this.scrollService.scrollToElement(element);
  }
  


}
