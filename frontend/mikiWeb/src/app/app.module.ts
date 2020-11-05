import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {Routes,RouterModule} from '@angular/router';
import { PicturesService } from './pictures.service';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   
    RouterModule.forRoot([
      {path:"home",component:HomeComponent}
    ])
  ],
  providers: [PicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
