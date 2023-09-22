import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main/main-page/main-page.component";
import { CountryComponent } from "./country/country/country.component";
const appRoutes:Route[]=[{path:"",redirectTo:"All",pathMatch:"full"},{path:":region",component:MainPageComponent},
{path:"country/:id/:name",component:CountryComponent}]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}