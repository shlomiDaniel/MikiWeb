import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-picture-add',
  templateUrl: './picture-add.component.html',
  styleUrls: ['./picture-add.component.css']
})
export class PictureAddComponent implements OnInit {

  fileName = "file";

  constructor() { }

  ngOnInit(): void {
  }

  addPictureToStore(addPicToStoreForm: NgForm): void {
    console.log("work in progress");
  }

}
