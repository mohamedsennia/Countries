import {Injectable} from "@angular/core"
import { Subject } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export  class ThemeService{
LightTheme:Subject<boolean>;
isLight:boolean
constructor(){
    this.isLight=true
    this.LightTheme=new Subject<boolean>();
};
toggleTheme(){
    this.isLight=!this.isLight
    this.LightTheme.next(this.isLight)
}
}