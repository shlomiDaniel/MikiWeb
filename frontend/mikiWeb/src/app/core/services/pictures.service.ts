import { Injectable } from '@angular/core';
import { PictureModel } from '../models/Picture.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  private pictures: PictureModel[];
  private pictureUpdate = new Subject<PictureModel[]>();
  constructor(public http: HttpClient, private router: Router) {}
  getAllPictures(): PictureModel[] {
    this.http
      .get<{ pictures: any }>('http://localhost:4000/pictures')
      .subscribe((pictureData) => {
        this.pictures = pictureData.pictures;
        this.pictureUpdate.next([...this.pictures]);
      });
    return this.pictures;
  }
  getPictureListener(): Observable<PictureModel[]> {
    return this.pictureUpdate.asObservable();
  }
}
