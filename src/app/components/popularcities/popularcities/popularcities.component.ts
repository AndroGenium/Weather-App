import { Component, OnInit } from '@angular/core';
import { PopularcitiesrandomService } from '../../../services/popularcitiesrandom.service';

@Component({
  selector: 'app-popularcities',
  templateUrl: './popularcities.component.html',
  styleUrls: ['./popularcities.component.scss']
})
export class PopularcitiesComponent implements OnInit {
  ScreenWidth: number = window.innerWidth;
  AllowedWidth: number = 500;
  ThreeCities: string[] = [];
  OneCity: string[]= [];

  constructor(public RSC: PopularcitiesrandomService) {}

  ngOnInit(): void {
    this.ThreeCities = this.RSC.GetCityArray(3)
    this.OneCity = this.RSC.GetCityArray(1)
  }
}

