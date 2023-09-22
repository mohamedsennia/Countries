import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../theme-service';
import { ConnectionSerivce } from '../connection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  lightTheme:boolean;

  constructor(private themeService:ThemeService,private connectionService:ConnectionSerivce){
    this.lightTheme=true

  }
  ngOnInit(): void {
    this.themeService.LightTheme.subscribe((value)=>{
      this.lightTheme=value
    })
    
  }
  ngOnDestroy(): void {
    this.themeService.LightTheme.unsubscribe()
  }
  
toggleTheme(){
this.themeService.toggleTheme();
}
getTheme(){
  if(this.lightTheme){
    return "  background-color: white ;"
  }else{
    return "background-color: hsl(209, 23%, 22%);color:white"
  }
}
}
