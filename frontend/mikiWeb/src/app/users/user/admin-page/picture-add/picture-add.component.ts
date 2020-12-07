import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { mineType } from 'src/app/core/Validator/mime-type';

@Component({
  selector: 'app-picture-add',
  templateUrl: './picture-add.component.html',
  styleUrls: ['./picture-add.component.css'],
})
export class PictureAddComponent implements OnInit {
  stack = [
    { value: true, label: 'קיים במלאי' },
    { value: false, label: 'לא קיים במלאי' },
  ];

  ngModelAddPicToStore: FormGroup;
  photoName = '';
  showImageArtBeforeUploadToStore;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.ngModelAddPicToStore = new FormGroup({
      nameofpic: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)],
      }),
      categorynum: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.minLength(0),
        ],
      }),
      nisprice: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.minLength(0),
        ],
      }),
      instockornot: new FormControl(true, {
        validators: [Validators.required],
      }),
      sizex: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.minLength(0),
        ],
      }),
      sizey: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.minLength(0),
        ],
      }),
      artworkdescription: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.minLength(0),
        ],
      }),
      imgPath: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mineType],
      }),
    });
  }

  addPictureToStore(): void {
    if (this.ngModelAddPicToStore.invalid) {
      console.log('Error: Add art to the store');
      return;
    }

    this.adminService.addNewPicture(
      this.ngModelAddPicToStore.value.categorynum,
      this.ngModelAddPicToStore.value.nameofpic,
      this.ngModelAddPicToStore.value.nisprice,
      this.ngModelAddPicToStore.value.imgPath,
      this.ngModelAddPicToStore.value.artworkdescription,
      this.ngModelAddPicToStore.value.sizex,
      this.ngModelAddPicToStore.value.sizey,
      this.ngModelAddPicToStore.value.instockornot
    );
  }

  chooseImageToStore(chooseImage: Event): void {
    const imageArt = (chooseImage.target as HTMLInputElement).files[0];
    this.ngModelAddPicToStore.patchValue({
      imgPath: imageArt,
    });
    this.ngModelAddPicToStore.get('imgPath').updateValueAndValidity();

    this.photoName = imageArt.name;

    const readFiles = new FileReader();
    readFiles.onload = () => {
      this.showImageArtBeforeUploadToStore = readFiles.result;
    };
    readFiles.readAsDataURL(imageArt);
  }
}
