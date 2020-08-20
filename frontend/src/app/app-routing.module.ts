import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { DropFileComponent } from './components/drop-file/drop-file.component'
import { AgentCardComponent } from './components/agent-card/agent-card.component';



const routes: Routes = [
  {path:"login", component :LoginComponent},
  {path:"home", component: HomePageComponent},
  {path:"createproperty", component: PropertyCreateComponent},
  {path:"menu", component: MenuComponent},
  {path:"banner", component: BannerComponent},
  {path:"dropFile", component :DropFileComponent},
  {path:"agent", component: AgentCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
