import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { CityoverviewpageComponent } from './components/cityoverviewpage/cityoverviewpage.component';

const routes: Routes = [
  {path : '', component: HomepageComponent},
  {path : 'CityOverview', component: CityoverviewpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
