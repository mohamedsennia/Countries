import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from './theme-service';
import { ConnectionSerivce } from './connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'CountriesInfo';
  LightTheme:boolean;
  constructor(private themeService:ThemeService, private connectionService:ConnectionSerivce){
  
this.LightTheme=true
  }

  ngOnInit(): void {
    this.themeService.LightTheme.subscribe((value)=>{
this.LightTheme=value
    })
  }
  ngOnDestroy(): void {
   this.themeService.LightTheme.unsubscribe()
  }
  getTheme(){
    
    if(this.LightTheme){
      return "background-color: hsl(0, 0%, 98%);"
    }else{
      return "background-color: hsl(207, 26%, 17%)"
    }
  }
}
