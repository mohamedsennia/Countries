import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionSerivce } from 'src/app/connection.service';
import { CountriesService } from 'src/app/country/countries-service';
import { countryInterface } from 'src/app/country/country-interface';
import { Country } from 'src/app/country/country-model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit{
  countries:countryInterface[]
  
constructor (public countriesService:CountriesService,private router:Router,private route:ActivatedRoute,private connectionService:ConnectionSerivce){
  
  this.countries=[]
}
  ngOnInit(): void {
  
   this.route.params.subscribe((params=>{
    const region:string=params["region"]
    if(region.toLocaleLowerCase()!="all"){

    
    this.connectionService.getByRegion(region).subscribe(params=>{
    
      this.countriesService.setCountries2(params)

    })}else{
      this.connectionService.getAll().subscribe(params=>{
        
     
        
        this.countriesService.setCountries2(params)
  
      })
    }
   }))
  }
showCountry(id:number,country:countryInterface){
  
this.router.navigate(["/country/"+id+"/"+country.name["common"]])

}
getCountry(country:countryInterface){
  let c:countryInterface;
  
  c=country;

  return c;
  
}

}
