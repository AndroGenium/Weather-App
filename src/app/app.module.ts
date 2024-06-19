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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PopularcitiesComponent,
    CityoverviewpageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSwitch,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
