import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/country/countries-service';
import { Country } from 'src/app/country/country-model';
import { ThemeService } from 'src/app/theme-service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit ,OnDestroy {
@Input() id:number=0;
image:String=""
country:Country;
IsLight:boolean;
constructor( private countriesService:CountriesService,private themeService:ThemeService){
  this.country=new Country("","",0,"","","","","",[],[],"")
  this.IsLight=true
}


  ngOnInit(): void {
    this.country=this.countriesService.getCountry(this.id);
    this.themeService.LightTheme.subscribe((value)=>{
      this.IsLight=value;
    })
  }
  ngOnDestroy(): void {
    this.themeService.LightTheme.unsubscribe()
  }
getTheme(){
  if(this.IsLight){
    return  "background-color: hsl(0, 0%, 98%); box-shadow: 10px 5px 5px gray;"
  }else{
    return  "background-color: hsl(209, 23%, 22%);color:white;box-shadow : 10px 5px 5px  hsl(208, 21%, 27%);"
  }
}
getImage(){
  this.image=this.country.getImage().replace('"','')
   var style='background-image:url("'+this.image+'");'
  return style
}
}
