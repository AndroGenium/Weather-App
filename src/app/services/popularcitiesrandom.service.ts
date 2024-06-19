import { Injectable } from '@angular/core';
import { CurrentWeatherService } from './WeatherApi/current-weather.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularcitiesrandomService {

  constructor( private CurrentWeather: CurrentWeatherService) { }

  PCities = [
    'Paris',
    'Dubai',
    'Madrid',
    'Tokyo',
    'Amsterdam',
    'Berlin',
    'Rome',
    'New York City',
    'Barcelona',
    'London',
    'Singapore',
    'Munich',
    'Milan',
    'Seoul',
    'Dublin',
    'Osaka',
    'Hong Kong',
    'Vienna',
    'Los Angeles',
    'Lisbon',
    'Prague',
    'Sydney',
    'Istanbul',
    'Melbourne',
    'Orlando',
    'Frankfurt',
    'Kyoto',
    'Taipei',
    'Florence',
    'Toronto',
    'Athens',
    'Zurich',
    'Bangkok',
    'Las Vegas',
    'Miami',
    'Kuala Lumpur',
    'Venice',
    'Abu Dhabi',
    'Stockholm',
    'Brussels',
    'Tel Aviv',
    'San Francisco',
    'Shanghai',
    'Warsaw',
    'Guangzhou',
    'Copenhagen',
    'Washington',
    'Budapest',
    'Shenzhen',
    'Vancouver',
    'Palma de Mallorca',
    'Seville',
    'São Paulo',
    'Valencia',
    'Mexico City',
    'Antalya',
    'Sapporo',
    'Beijing',
    'Busan',
    'Fukuoka',
    'Edinburgh',
    'Porto',
    'Jerusalem',
    'Kraków',
    'Rio de Janeiro',
    'Honolulu',
    'Montreal',
    'Macau',
    'Cancún',
    'Marne-La-Vallée',
    'Doha',
    'Sharjah',
    'Rhodes',
    'Verona',
    'Bologna',
    'Thessaloniki',
    'Buenos Aires',
    'Lima',
    'Phuket',
    'Delhi',
    'Heraklion',
    'Tallinn',
    'Pattaya-Chonburi',
    'Ho Chi Minh City',
    'Playa Del Carmen',
    'Johor Bahru',
    'Santiago',
    'Tbilisi',
    'Riyadh',
    'Marrakech',
    'Vilnius',
    'Mugla',
    'Zhuhai',
    'Mecca',
    'Punta Cana',
    'Guilin',
    'Hanoi',
    'Cairo',
    'Muscat',
  ]

  GetRandom100(){
    return Math.floor(Math.random() * 100)
  }
  GetCityRandom(){
    return this.PCities[this.GetRandom100()]
  }

  GetCityArray(Size: any){
    let x: string[] = []
    let y!: string
    let z!: object
    while(x.length < Size){
      y = this.GetCityRandom()
      
      if(x.includes(y)){

      }
      else{
        this.CurrentWeather.getCurrentWeather(y)
        .subscribe((data: object) =>{
          z = data
          console.log(z);
        })
        x.push(z +" "+y)
        
      }
    }

    return x
  }
}
