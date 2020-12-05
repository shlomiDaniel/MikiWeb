import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  testData;
  getPicturesAll() {
    this.httpToBackend
      .get('http://localhost:4000/pictures/getpictures')
      .pipe(map( x => {
        console.log(x);
        return x;
      })).subscribe();
    }
}
