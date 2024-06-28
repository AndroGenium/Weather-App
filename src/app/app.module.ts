import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { PopularcitiesComponent } from './components/popularcities/popularcities/popularcities.component';
import { NgSwitch } from '@angular/common';
import { CityoverviewpageComponent } from './components/cityoverviewpage/cityoverviewpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastsComponent } from './components/forecasts/forecasts.component';
import { RainingLoaderComponent } from './loaders/raining-loader/raining-loader.component';
import { FormsModule } from '@angular/forms';
import { CitoverviewComponent } from './components/citoverview/citoverview.component';
import { MissionpageComponent } from './components/missionpage/missionpage.component';
import { NewsletterPageComponent } from './components/newsletter-page/newsletter-page.component';
import { DatavendorspageComponent } from './components/datavendorspage/datavendorspage.component';
import { AccessibilitypageComponent } from './components/accessibilitypage/accessibilitypage.component';
import { TermsOfUsepageComponent } from './components/terms-of-usepage/terms-of-usepage.component';
import { PrivacyPolicyPageComponent } from './components/privacy-policy-page/privacy-policy-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PopularcitiesComponent,
    CityoverviewpageComponent,
    FooterComponent,
    ForecastsComponent,
    RainingLoaderComponent,
    CitoverviewComponent,
    MissionpageComponent,
    NewsletterPageComponent,
    DatavendorspageComponent,
    AccessibilitypageComponent,
    TermsOfUsepageComponent,
    PrivacyPolicyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
