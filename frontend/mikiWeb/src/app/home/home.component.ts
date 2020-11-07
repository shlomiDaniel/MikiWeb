import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Picture } from '../pictures/Picture.model';
import { PicturesService } from '../pictures/pictures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  picSub: Subscription;
  constructor(public pictureService: PicturesService, http: HttpClient) {}
  pictures: any;
  ngOnInit(): void {
    this.pictures = this.pictureService.getAllPictures();
    console.log(this.pictures);
    this.picSub = this.pictureService
      .getPictureListener()
      .subscribe((pictures: Picture[]) => {
        this.pictures = pictures;
      });
  }
}
