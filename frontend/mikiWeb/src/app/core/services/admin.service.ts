import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PictureModel } from '../models/Picture.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpToBackend: HttpClient) {}

  addNewPicture(
    catalogNumber: number,
    name: string,
    price: number,
    imgPath: string,
    description: string,
    size_x: number,
    size_y: number,
    inStock: boolean
  ) {
    const pictureData: PictureModel = {
      catalogNumber: catalogNumber,
      name: name,
      price: price,
      imgPath: imgPath,
      description: description,
      size_x: size_x,
      size_y: size_y,
      inStock: inStock,
    };
    this.httpToBackend
      .post('http://localhost:4000/admin/addpicture', pictureData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
