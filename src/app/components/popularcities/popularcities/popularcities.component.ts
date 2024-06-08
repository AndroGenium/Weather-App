import { Component } from '@angular/core';
import { PopularcitiesrandomService } from '../../../services/popularcitiesrandom.service';

@Component({
  selector: 'app-popularcities',
  templateUrl: './popularcities.component.html',
  styleUrl: './popularcities.component.scss'
})
export class PopularcitiesComponent {
  constructor(public RSC: PopularcitiesrandomService){}

  Cities = this.RSC.GetCityArray(3)

}
