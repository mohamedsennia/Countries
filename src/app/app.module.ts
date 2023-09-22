import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './main/search/search.component';
import { CountriesListComponent } from './main/countries-list/countries-list.component';
import { CountryItemComponent } from './main/country-item/country-item.component';
import { CountryComponent } from './country/country/country.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.model';
import { HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CountriesListComponent,
    CountryItemComponent,
    CountryComponent,
    MainPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
