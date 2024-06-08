import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularcitiesrandomService {

  constructor() { }

  PCities = [
    `Paris, France`,
    `Dubai, United Arab Emirates`,
    `Madrid, Spain`,
    `Tokyo, Japan`,
    `Amsterdam, Netherlands`,
    `Berlin, Germany`,
    `Rome, Italy`,
    `New York City`,
    `Barcelona, Spain`,
    `London, United Kingdom`,
    `Singapore`,
    `Munich, Germany`,
    `Milan, Italy`,
    `Seoul, South Korea`,
    `Dublin, Ireland`,
    `Osaka, Japan`,
    `Hong Kong`,
    `Vienna, Austria`,
    `Los Angeles`,
    `Lisbon, Portugal`,
    `Prague, Czech Republic`,
    `Sydney, Australia`,
    `Istanbul, Turkey`,
    `Melbourne, Australia`,
    `Orlando, Florida`,
    `Frankfurt, Germany`,
    `Kyoto, Japan`,
    `Taipei, Taiwan`,
    `Florence, Italy`,
    `Toronto, Canada`,
    `Athens, Greece`,
    `Zurich, Switzerland`,
    `Bangkok, Thailand`,
    `Las Vegas`,
    `Miami`,
    `Kuala Lumpur, Malaysia`,
    `Venice, Italy`,
    `Abu Dhabi, United Arab Emirates`,
    `Stockholm, Sweden`,
    `Brussels, Belgium`,
    `Tel Aviv, Israel`,
    `San Francisco`,
    `Shanghai, China`,
    `Warsaw, Poland`,
    `Guangzhou, China`,
    `Copenhagen, Denmark`,
    `Nice, France`,
    `Washington, United States`,
    `Budapest, Hungary`,
    `Shenzhen, China`,
    `Vancouver, Canada`,
    `Palma de Mallorca, Spain`,
    `Seville, Spain`,
    `São Paulo, Brazil`,
    `Valencia, Spain`,
    `Mexico City, Mexico`,
    `Antalya, Turkey`,
    `Sapporo, Japan`,
    `Beijing, China`,
    `Busan, South Korea`,
    `Fukuoka, Japan`,
    `Edinburgh, United Kingdom`,
    `Porto, Portugal`,
    `Jerusalem, Israel`,
    `Kraków, Poland`,
    `Rio de Janeiro, Brazil`,
    `Honolulu, Hawaii`,
    `Montreal, Canada`,
    `Macau`,
    `Cancún, Mexico`,
    `Marne-La-Vallée, France`,
    `Doha, Qatar`,
    `Sharjah, United Arab Emirates`,
    `Rhodes, Greece`,
    `Verona, Italy`,
    `Bologna, Italy`,
    `Thessaloniki, Greece`,
    `Buenos Aires, Argentina`,
    `Lima, Peru`,
    `Phuket, Thailand`,
    `Delhi, India`,
    `Heraklion, Greece`,
    `Tallinn, Estonia`,
    `Pattaya-Chonburi, Thailand`,
    `Ho Chi Minh City, Vietnam`,
    `Playa Del Carmen, Mexico`,
    `Johor Bahru, Malaysia`,
    `Santiago, Chile`,
    `Tbilisi, Georgia`,
    `Riyadh, Saudi Arabia`,
    `Marrakech, Morocco`,
    `Vilnius, Lithuania`,
    `Mugla, Turkey`,
    `Zhuhai, China`,
    `Mecca, Saudi Arabia`,
    `Punta Cana, Dominican Republic`,
    `Guilin, China`,
    `Hanoi, Vietnam`,
    `Cairo, Egypt`,
    `Muscat, Oman`
  ]
  GetRandom100(){
    return Math.floor(Math.random() * 100)
  }
  GetCityRandom(){
    return this.PCities[this.GetRandom100()]
  }

  GetCityArray(Size: any){
    let x = []

    x.push(this.GetCityRandom())
    let y = ''
    while(x.length < Size){
      y = this.GetCityRandom()

      if(x.includes(y)){
      }
      else{
        x.push(y)
      }
    }

    return x
  }
}
