import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/theme-service';
import {FormControl, FormGroup} from '@angular/forms'
import { CountriesService } from 'src/app/country/countries-service';
import { Country } from 'src/app/country/country-model';
import { countryInterface } from 'src/app/country/country-interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  IsLight:boolean;
  themeSubject:Subscription=new Subscription();
  regions:string[];
  form:FormGroup;
  region="all"
  routeSub:Subscription=new Subscription()
 Countries:countryInterface[]=[]
constructor(private themeService:ThemeService,private route:ActivatedRoute,private router:Router,private countriesService:CountriesService){
this.IsLight=true
this.regions=["All","Asia","Oceania","Americas","Europe","Africa"];
this.form=new FormGroup({
  "Search-name":new FormControl(null),
  "Search-region":new FormControl(null),
  
})

}
  ngOnInit(): void {
    this.themeSubject=this.themeService.LightTheme.subscribe((value)=>{
      this.IsLight=value;
    })
    this.routeSub=this.route.params.subscribe((params)=>{
      
      this.region=params["region"]
     
      this.form.controls['Search-region'].setValue(this.region)
    });
   
    this.Countries=[]
  }
  ngOnDestroy(): void {
    this.themeSubject.unsubscribe()
    this.routeSub.unsubscribe();
  }
getTheme(){
  if(this.IsLight){
    return  "background-color: hsl(0, 0%, 98%);"
  }else{
    return  "background-color: hsl(209, 23%, 22%);color:white"
  }
}
regionChanged(){
  this.router.navigate(["/"+this.form.value["Search-region"]])

}
checkSelected(region:string){

  if(region.toLowerCase()==this.region.toLocaleLowerCase()){
    return true
  }else{
    return false
  }

}
search(){
 if(this.Countries.length==0){
  this.Countries=this.countriesService.getCountries2()
 }
  
  this.countriesService.setCountries2(this.Countries.filter(elem=>{console.log(elem.name.common) 
 return elem.name.common.toLocaleLowerCase().includes(this.form.value["Search-name"].toLocaleLowerCase())}))
}
}
