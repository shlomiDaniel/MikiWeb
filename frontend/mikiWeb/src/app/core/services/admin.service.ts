import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PictureModel } from '../models/Picture.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpToBackend: HttpClient) {}

  addNewPicture(
    catalogNumber: string,
    name: string,
    price: string,
    imgPath: string,
    description: string,
    size_x: string,
    size_y: string,
    inStock: string
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
