import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mikiWeb';
  innerWidth: any;

  getStyleList() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 450) {
      return { 'margin-top': '4%' };
    } else {
      return { 'margin-top': '15%' };
    }
  }
}
