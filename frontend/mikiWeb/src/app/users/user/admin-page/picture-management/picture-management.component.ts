import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/core/services/pictures.service';

@Component({
  selector: 'app-picture-management',
  templateUrl: './picture-management.component.html',
  styleUrls: ['./picture-management.component.css'],
})
export class PictureManagementComponent implements OnInit {
  constructor(private pictureService: PicturesService) {}


  ngOnInit(): void {
    this.pictureService.getPicturesAllData();
  }
}
