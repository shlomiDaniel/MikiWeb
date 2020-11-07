import { Injectable } from '@angular/core';
import { Picture } from './Picture.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  private pictures: Picture[];
  private pictureUpdate = new Subject<Picture[]>();
  constructor(public http: HttpClient, private router: Router) {}
  getAllPictures(): Picture[] {
    this.http
      .get<{ pictures: any }>('http://localhost:4000/pictures')
      .subscribe((pictureData) => {
        this.pictures = pictureData.pictures;
        console.log(pictureData.pictures);
        this.pictureUpdate.next([...this.pictures]);
        console.log(this.pictures);
      });
    return this.pictures;
  }
  getPictureListener(): Observable<Picture[]> {
    return this.pictureUpdate.asObservable();
  }
}
