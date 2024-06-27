import { Component } from '@angular/core';
import { DatatransferService } from '../../services/datatransfer.service';

@Component({
  selector: 'app-citoverview',
  templateUrl: './citoverview.component.html',
  styleUrl: './citoverview.component.scss'
})
export class CitoverviewComponent {
  datacurrent !:any
  datamorning !:any
  dataafternoon !:any 
  dataevening !:any 
  dataovernight !:any 

  constructor(public TransportService: DatatransferService)
  { 
    this.datacurrent = this.TransportService.CityData
    this.datamorning = this.TransportService.CityDataMorning
    this.dataafternoon = this.TransportService.CityDataAfternoon
    this.dataevening = this.TransportService.CityDataEvening
    this.dataovernight = this.TransportService.CityDataOvernight
   // Outputs the current date and time in YYYY-MM-DD HH:MM:SS format
    console.log(this.datacurrent)
    console.log(this.datamorning)
    console.log(this.dataafternoon)
    console.log(this.dataevening)
    console.log(this.dataovernight)
  }

}
