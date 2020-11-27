import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public userDataService: UserDataService) {}

  ngOnInit(): void {}

  onLogin(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    this.userDataService.loginUser(form.value.email, form.value.password);
  }
}
