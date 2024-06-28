import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { CityoverviewpageComponent } from './components/cityoverviewpage/cityoverviewpage.component';
import { AccessibilitypageComponent } from './components/accessibilitypage/accessibilitypage.component';
import { DatavendorspageComponent } from './components/datavendorspage/datavendorspage.component';
import { MissionpageComponent } from './components/missionpage/missionpage.component';
import { NewsletterPageComponent } from './components/newsletter-page/newsletter-page.component';
import { TermsOfUsepageComponent } from './components/terms-of-usepage/terms-of-usepage.component';
import { PrivacyPolicyPageComponent } from './components/privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  {path : '', component: HomepageComponent},
  {path : 'CityOverview', component: CityoverviewpageComponent},
  {path : 'Accessibility', component: AccessibilitypageComponent},
  {path : 'DataVendors', component: DatavendorspageComponent},
  {path : 'Mission', component: MissionpageComponent},
  {path : 'NewsLetter', component: NewsletterPageComponent},
  {path : 'TermsOfUse', component: TermsOfUsepageComponent},
  {path : 'PrivacyPolicy', component: PrivacyPolicyPageComponent},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
