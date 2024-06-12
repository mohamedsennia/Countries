import { Component, OnInit } from '@angular/core';
import { Country } from '../country-model';
import { CountriesService } from '../countries-service';
import { ActivatedRoute } from '@angular/router';
import { ConnectionSerivce } from 'src/app/connection.service';
import {Location } from "@angular/common"
import { ThemeService } from 'src/app/theme-service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
id:number=0;
country:Country
loading:boolean=true
neighbors:string[]
constructor(private countriesService:CountriesService, private route:ActivatedRoute,private connectionService:ConnectionSerivce, private location: Location,private themeSerivce:ThemeService){
  this.country=new Country([],{"":{"name":"","symbol":""}},{"png":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg","svg":"str","alt":"str"},{"ar":""},{"common":"string","nativeName":[{"":{"offical":"","common":""}}],"official":"string"},0,"","",[],[])
  this.neighbors=[]
}
  ngOnInit(): void {
this.route.params.subscribe(params=>{
  this.loading=true;
  this.connectionService.getCountryByName(params["name"].toLocaleLowerCase()).subscribe(param=>{
   


   this.country=param;
   this.loading=false
    for(let border of this.country.borders){
 
  this.connectionService.getNameByCode(border).subscribe(param=>{
  
    this.neighbors.push(param)
  })
}
  })

})


  }
  getCurrencies(){
   let currencies:string[]=[];

    for(let currency in this.country.currencies){
    currencies.push(this.country.currencies[currency].name)
    }
    return currencies
  }
  getLanguages(){
    let Languages:string[]=[];

   for(let language in this.country.languages){
      Languages.push(this.country.languages[language])
    }
  
    return Languages
  }
  getNativeName(){
    
   for (let name in this.country.name.nativeName){
    
    return this.country.name.nativeName[name]['official']
   }
   return ""
  }
  back(){
    this.location.back()
  }
  getTheme(){
    if(this.themeSerivce.isLight){
      return  "color:black"
    }else{
      return  "color:white"
    }
  }

}
