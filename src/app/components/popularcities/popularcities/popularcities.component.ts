import { Component } from '@angular/core';
import { PopularcitiesrandomService } from '../../../services/popularcitiesrandom.service';

@Component({
  selector: 'app-popularcities',
  templateUrl: './popularcities.component.html',
  styleUrl: './popularcities.component.scss'
})
export class PopularcitiesComponent {
  constructor(public RSC: PopularcitiesrandomService){}

  ScreenWidth = window.innerWidth
  AllowedWidth = 500
  ScreenIf = this.ScreenWidth > this.AllowedWidth
  ThreeCities = this.RSC.GetCityArray(3)
  OneCity = this.RSC.GetCityArray(1)
}
