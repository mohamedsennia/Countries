import { Injectable } from "@angular/core";
import { Country } from "./country-model";
import { countryInterface } from "./country-interface";

@Injectable({
    providedIn:'root'
})
export class CountriesService{
   private countries:Country[];
   private countries2:countryInterface[]=[];
   
    constructor(){
       /* this.countries=[new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Algeria","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg")]*/
        this.countries=[]
   
    }
getCountries(){
    return this.countries.slice();
}
setCountries2(countries:countryInterface[]){
    this.countries2=countries;

}
setCountries(countries:Country[]){
    this.countries=countries;

}
getCountries2(){
    return this.countries2.slice();
}
getCountry(index:number){

    return this.countries[index]
}
getCountry2(index:number){

    return this.countries2[index]
}
}