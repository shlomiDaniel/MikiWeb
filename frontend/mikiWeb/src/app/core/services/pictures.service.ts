import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PictureModel } from '../models/Picture.model';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  getPicturesAllData() {
    this.httpToBackend
      .get('http://localhost:4000/pictures/getpictures')
      .pipe(x => {
        console.log(x);
        return x;
      }).subscribe();
    }
}
