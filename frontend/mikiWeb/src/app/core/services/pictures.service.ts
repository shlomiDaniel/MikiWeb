import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PictureModel } from '../models/Picture.model';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  getPicturesAllData(): Observable<PictureModel[]> {
    return this.httpToBackend
      .get<any>('http://localhost:4000/pictures/getpictures')
      .pipe(map((getArtData) => {
        return getArtData.pictures;
      }));
  }
}
