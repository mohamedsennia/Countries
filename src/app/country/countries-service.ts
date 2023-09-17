import { Injectable } from "@angular/core";
import { Country } from "./country-model";

@Injectable({
    providedIn:'root'
})
export class CountriesService{
   private countries:Country[];
    constructor(){
        this.countries=[new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Algeria","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg"),
        new Country("Belgium","Belgie",11319511,"Europe","Western Europe","Brussels","be","Euro",["Dutch","French","German"],["France","Germany","Netherlands"],"https://flagcdn.com/dz.svg")]
   
    }
getCountries(){
    return this.countries.slice();
}
getCountry(index:number){

    return this.countries[index]
}
}