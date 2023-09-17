import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main/main-page/main-page.component";
import { CountryComponent } from "./country/country/country.component";
const appRoutes:Route[]=[{path:"",component:MainPageComponent,pathMatch:"full"},
{path:"country/:id",component:CountryComponent}]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}