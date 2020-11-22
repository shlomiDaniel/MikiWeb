import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesService } from './services/pictures.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [PicturesService],
})
export class CoreModule { }
