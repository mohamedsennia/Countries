import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  IsLight:boolean;
constructor(private themeService:ThemeService){
this.IsLight=true
}
  ngOnInit(): void {
    this.themeService.LightTheme.subscribe((value)=>{
      this.IsLight=value;
    })
  }
  ngOnDestroy(): void {
    this.themeService.LightTheme.unsubscribe()
  }
getTheme(){
  if(this.IsLight){
    return  "background-color: hsl(0, 0%, 98%);"
  }else{
    return  "background-color: hsl(209, 23%, 22%);color:white"
  }
}
}
