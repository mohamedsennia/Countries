import { Component, OnInit } from '@angular/core';
import { Country } from '../country-model';
import { CountriesService } from '../countries-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
id:number=0;
country:Country
constructor(private countriesService:CountriesService, private route:ActivatedRoute){
  this.country=this.countriesService.getCountry(this.id)
 
 
}
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id= +params["id"]
      this.country=this.countriesService.getCountry(this.id)
    })
  }
}
