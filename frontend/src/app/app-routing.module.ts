import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { DropFileComponent } from './components/drop-file/drop-file.component'
import { AgentCardComponent } from './components/agent-card/agent-card.component';
<<<<<<< HEAD
import { PropertyDisplayComponent } from './components/property-display/property-display.component'
=======

>>>>>>> 20b694a4eef33e8f9a72ba78bb121207d3b59892


const routes: Routes = [
  {path:"login", component :LoginComponent},
  {path:"home", component: HomePageComponent},
  {path:"createproperty", component: PropertyCreateComponent},
  {path:"menu", component: MenuComponent},
  {path:"banner", component: BannerComponent},
  {path:"dropFile", component :DropFileComponent},
<<<<<<< HEAD
  {path:"agent", component: AgentCardComponent},
  {path:"displayproperty", component :PropertyDisplayComponent}
=======
  {path:"agent", component: AgentCardComponent}
>>>>>>> 20b694a4eef33e8f9a72ba78bb121207d3b59892
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
