export class Country{
     capital:string[]
     currencies:{[key:string]:{"name":string,"symbol":string}}
     flags:{"png":string,"svg":string,"alt":string}
     languages:{[key:string]:string}
     name:{"common":string,"nativeName":{[key:string]:{"offical":string,"common":string}}[],"official":string};
     population:number;
     region:String;
     subregion:String
     tld:string[]
     borders:string[]
constructor(capital:string[],currencies:{[key:string]:{"name":string,"symbol":string}},flags:{"png":string,svg:string,"alt":string},languages:{[key:string]:string}, name:{"common":string,"nativeName":{[key:string]:{"offical":string,"common":string}}[],"official":string},population:number,region:String,subregion:String,tld:string[],borders:string[]

){
    this.capital=capital
    this.currencies=currencies
    this.flags=flags
    this.languages=languages
    this.name=name
    this.population=population
    this.region=region
    this.subregion=subregion
    this.tld=tld
    this.borders=borders;
}
getImage(){
   
    return this.flags.png
}
getName(){
    return this.name.common;
}
getNativeName(){
    for (const key in this.name.nativeName[0]) {
        return this.name.nativeName[0][key]["common"]
      }
      return ""


}
getPopulation(){
    return this.population;
}
getRegion(){
    return this.region
}
getSubRegion(){
    return this.subregion;
}
getCapital(){
    return this.capital[0];
}
getDomain(){
    //return this.domain;
}
getCurrency(){
    return this.currencies
}
/*getLanguages(){
    return this.languages.slice();
}*/
getNeighbors(){
   console.log(this.borders);
   return this.borders;
}
}