import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PropertyDisplayComponent } from './components/property-display/property-display.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { ImageUploadService } from './services/image-upload.service';
import { InteractionService } from './services/interaction-service/interaction.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropFileComponent } from './components/drop-file/drop-file.component';
import { PropertyService } from './services/property/property.service';
import { AgentService } from './services/agent/agent.service';
import { PropertyTypeService } from './services/property-type/property-type.service';
import { AgentCardComponent } from './components/agent-card/agent-card.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { AgentsDisplayComponent } from './components/agents-display/agents-display.component';
import { AgentPropertiesDisplayComponent } from './components/agent-properties-display/agent-properties-display.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    PropertyDisplayComponent,
    PropertyCreateComponent,
    MenuComponent,
    BannerComponent,
    DropFileComponent,
    AgentCardComponent,
    PropertyCardComponent,
    AgentsDisplayComponent,
    AgentPropertiesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule
    
  ],
  providers: [
    InteractionService,
    ImageUploadService,
    PropertyService,
    AgentService,
    PropertyTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
