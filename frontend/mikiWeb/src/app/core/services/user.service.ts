import { HttpClient } from '@angular/common/http';
import { UserDataModel } from '../models/user.model';

export class UserDataService {
  constructor(private httpToBackend: HttpClient) {};

  createUserData(
    userName: string,
    userLastName: string,
    userAge: number,
    userAddr: string,
    userCity: string,
    userPhone: number,
    userEmail: string
  ) {
    const userData: UserDataModel = {
        userName,
        userLastName,
        userAge,
        userAddr,
        userCity,
        userPhone,
        userEmail,
    };
  }
}
