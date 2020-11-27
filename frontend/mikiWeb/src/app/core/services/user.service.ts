import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private httpToBackend: HttpClient) {}

  createUserData(
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

  loginUser(email: string, password: string) {
    const userDataForLogin = {
      // i did JavaScript object for not open one more model for 1 use
      email: email,
      password: password,
    };
    this.httpToBackend
      .post('http://localhost:4000/users/login', userDataForLogin)
      .subscribe((responseData) => {
      });
  }
}
