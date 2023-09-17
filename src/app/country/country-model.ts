export class Country{
    constructor(private name:String, private nativeName:String,private population:Number,private region:String,private subRegion:String,private capital:String,private domain:String,private currency:String,private languages:String[],private neighbors:String[],private image:String){

    }

getImage(){
   
    return this.image;
}
getName(){
    return this.name;
}
getNativeName(){
    return this.nativeName;
}
getPopulation(){
    return this.population;
}
getRegion(){
    return this.region
}
getSubRegion(){
    return this.subRegion;
}
getCapital(){
    return this.capital;
}
getDomain(){
    return this.domain;
}
getCurrency(){
    return this.currency
}
getLanguages(){
    return this.languages.slice();
}
getNeighbors(){
    return this.neighbors.slice();
}
}