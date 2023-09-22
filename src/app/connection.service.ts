import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { countryInterface } from "./country/country-interface";
import {map} from "rxjs"
import { CountriesService } from "./country/countries-service";
import { Country } from "./country/country-model";
@Injectable({
    "providedIn": "root"
})
export class ConnectionSerivce{
    constructor(private httpClient:HttpClient,private countriesService:CountriesService){
      this.trying()
    }
    getAll(){
       return this.httpClient.get<countryInterface[]>("https://restcountries.com/v3.1/all?&fields=name,capital,region,flags,population").pipe(map((responseD)=>{
        let response:countryInterface[]=[]
       
        for (const key in responseD){
          if(responseD[key].name.common=="Israel"){

          }else{
            response.push(responseD[key])
          }
               

            }
            
            return response
        }))
    }
    getByRegion(region:string){
        region=region.toLocaleLowerCase()
        
      return    this.httpClient.get<countryInterface[]>("https://restcountries.com/v3.1/region/"+region+"?&fields=name,capital,region,flags,population").pipe(map((responseD)=>{
            let response:countryInterface[]=[]
            for (const key in responseD){
                    response.push(responseD[key])
                }
            
                return response
            }))
    }
    getCountryByName(name:string){
      return  this.httpClient.get<Country[]>("https://restcountries.com/v3.1/name/"+name+"?&fields=name,capital,region,flags,population,subregion,languages,currencies,tld").pipe(map(param=>{
       
        return param[0];
      }))
    }
    trying(){
      this.httpClient.get("https://restcountries.com/v3.1/all").subscribe(param=>{
        console.log(param)
      })
    }
}