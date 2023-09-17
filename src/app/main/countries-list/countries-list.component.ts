import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/country/countries-service';
import { Country } from 'src/app/country/country-model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
  countries:Country[]
constructor (private countriesService:CountriesService,private route:Router){
  this.countries=countriesService.getCountries();
}
showCountry(id:number){
this.route.navigate(["/country/"+id])
}
}
