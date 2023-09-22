import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/country/countries-service';
import { countryInterface } from 'src/app/country/country-interface';
import { Country } from 'src/app/country/country-model';
import { ThemeService } from 'src/app/theme-service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit ,OnDestroy {

image:String=""
@Input() country:countryInterface;
 countryData:countryInterface;
IsLight:boolean;
themeSub:Subscription=new Subscription()
constructor( private countriesService:CountriesService,private themeService:ThemeService){
  this.country=new countryInterface();
  this.countryData=new countryInterface()
 
  this.IsLight=this.themeService.isLight
}


  ngOnInit(): void {
   
   
    this.countryData.setInterface(this.country)
    this.themeSub=this.themeService.LightTheme.subscribe((value)=>{
      this.IsLight=value;
    })
  }
  ngOnDestroy(): void {
    this.themeSub.unsubscribe()
  }
getTheme(){
  if(this.IsLight){
    return  "background-color: hsl(0, 0%, 98%); box-shadow: 10px 5px 5px gray;"
  }else{
    return  "background-color: hsl(209, 23%, 22%);color:white;box-shadow : 10px 5px 5px  hsl(208, 21%, 27%);"
  }
}
getImage(){

   var style='background-image:url("'+this.countryData.getPNGFlag()+'");'
  return style
}
}
