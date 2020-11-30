import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpToBackend: HttpClient) {}

  addNewPicture(
    catalogNumber: number,
    name: string,
    price: number,
    imgPath: string,
    description: string,
    size_x: number,
    size_y: number,
    inStock: number
  ) {}
}
