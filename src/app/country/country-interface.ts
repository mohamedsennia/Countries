export class countryInterface{
    name:{"common":string,"nativeName":string,"official":string};
    population:number;
    region:String;
    capital:string[];
    flags:{"alt":string,"png":string,"svg":string}
    constructor(){
        this.name={"common":"","nativeName":"","official":""};
        this.population=0
        this.region=""
        this.capital=[]
        this.flags={"alt":"","png":"","svg":""};
    }
    setInterface(country :countryInterface){
this.name=country.name;
this.capital=country.capital;

this.population=country.population;
this.region=country.region;
this.flags=country.flags;

    }
    getName(){
        return this.name;
    }
    getPopulation(){
        return this.population
    }
    getRegion(){
        return this.region;
    }
    getCapital(){
        return this.capital
    }
    getFirstName(){
        return this.name["common"]
    }
    getPNGFlag(){
return this.flags["png"]
    }
    getFirstCapital(){
        return this.capital[0];
    }
}