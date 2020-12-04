import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  getPicturesAll(): void {
    this.httpToBackend.get("http://localhost:4000/")
  }
}
