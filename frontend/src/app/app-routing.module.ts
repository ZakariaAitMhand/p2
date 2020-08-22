import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { DropFileComponent } from './components/drop-file/drop-file.component'
import { AgentCardComponent } from './components/agent-card/agent-card.component';
import { PropertyDisplayComponent } from './components/property-display/property-display.component'
import { AgentsDisplayComponent } from './components/agents-display/agents-display.component';
import { AgentPropertiesDisplayComponent } from './components/agent-properties-display/agent-properties-display.component';
import { StaticMapComponent } from './components/static-map/static-map.component';

const routes: Routes = [
  // {path:"", redirectTo:"home"},
  {path:"home", component: HomePageComponent},
  {path:"login", component :LoginComponent},
  {path:"createproperty", component: PropertyCreateComponent},
  {path:"menu", component: MenuComponent},
  {path:"banner", component: BannerComponent},
  {path:"dropFile", component :DropFileComponent},
  {path:"agent", component: AgentCardComponent},
  {path:"displayproperty/:{id}", component :PropertyDisplayComponent},
  {path:"map", component: StaticMapComponent},
  {path:"displayagents", component: AgentsDisplayComponent},
  {path:"agentproperties", component: AgentPropertiesDisplayComponent},


  {path:"**", component: HomePageComponent} // DO NOT PUT ANY PATHS BELOW THIS!!!!!!!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
