import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private httpToBackend: HttpClient) {}

  createUserData(
    userName: string,
    userFirstName: string,
    userLastName: string,
    userAge: Date,
    userAddress: string,
    userCity: string,
    userPhone: number,
    email: string,
    password: string
  ) {
    const userData: UserDataModel = {
      userName: userName,
      userFirstName: userFirstName,
      userLastName: userLastName,
      userAge: userAge,
      userCity: userCity,
      userAddress: userAddress,
      userPhone: userPhone,
      email: email,
      password: password,
    };
    this.httpToBackend
      .post('http://localhost:4000/users/registration', userData)
      .subscribe((responeData) => {
        console.log(responeData);
      });
  }
}
