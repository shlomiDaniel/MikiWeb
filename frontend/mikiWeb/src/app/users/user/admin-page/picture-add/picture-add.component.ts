import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-picture-add',
  templateUrl: './picture-add.component.html',
  styleUrls: ['./picture-add.component.css']
})
export class PictureAddComponent implements OnInit {

  fileName = "file";

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  addPictureToStore(addPicToStoreForm: NgForm): void {
    this.adminService.addNewPicture(
      addPicToStoreForm.value.categorynum,
      addPicToStoreForm.value.nameofpic,
      addPicToStoreForm.value.nisprice,
      addPicToStoreForm.value.photoupload,
      addPicToStoreForm.value.artworkdescription,
      addPicToStoreForm.value.sizex,
      addPicToStoreForm.value.sizey,
      addPicToStoreForm.value.instockornot,
    )
  }
}
