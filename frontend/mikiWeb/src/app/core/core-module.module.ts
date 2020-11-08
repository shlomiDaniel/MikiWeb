import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesService } from './services/pictures.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PicturesService],
})
export class CoreModule { }
