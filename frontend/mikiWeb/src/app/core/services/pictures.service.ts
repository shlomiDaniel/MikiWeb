import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  getPicturesAllData(): Observable<any> {
    return this.httpToBackend
      .get('http://localhost:4000/pictures/getpictures')
      .pipe(
        map((getArtData) => {
          return getArtData
        })
      );
  }
}
