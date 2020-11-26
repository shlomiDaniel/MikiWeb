import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(public userDataService: UserDataService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.userDataService.createUserData(
      form.value.username,
      form.value.firstname,
      form.value.lastname,
      form.value.birthdaydate,
      form.value.city,
      form.value.address,
      form.value.phonenumber,
      form.value.email,
      form.value.password1
    );
  }
}
