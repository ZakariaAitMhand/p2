import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PropertyDisplayHomepageComponent } from './components/property-display-homepage/property-display-homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { ImageUploadService } from './services/image-upload.service';
import { InteractionService } from './services/interaction-service/interaction.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropFileComponent } from './components/drop-file/drop-file.component';
import { PropertyService } from './services/property/property.service';
import { AgentCardComponent } from './components/agent-card/agent-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    PropertyDisplayHomepageComponent,
    PropertyCreateComponent,
    MenuComponent,
    BannerComponent,
    DropFileComponent,
    AgentCardComponent
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
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
