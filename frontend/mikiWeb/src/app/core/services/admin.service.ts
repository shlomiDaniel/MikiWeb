import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpToBackend: HttpClient) {}

  addNewPicture(
    catalogNumber: number,
    name: string,
    price: number,
    imgPath: File,
    description: string,
    size_x: number,
    size_y: number,
    inStock: boolean
  ) {
    const pictureData = new FormData();
    pictureData.append('catalogNumber', catalogNumber.toString());
    pictureData.append('name', name);
    pictureData.append('price', price.toString());
    pictureData.append('imgPath', imgPath, name);
    pictureData.append('description', description);
    pictureData.append('size_x', size_x.toString());
    pictureData.append('size_y', size_y.toString());
    pictureData.append('inStock', inStock.toString());
    this.httpToBackend
      .post('http://localhost:4000/admin/addpicture', pictureData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
