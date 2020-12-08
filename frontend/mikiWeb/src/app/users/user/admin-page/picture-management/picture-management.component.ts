import { Component, OnInit } from '@angular/core';
import { PictureModel } from 'src/app/core/models/Picture.model';
import { PicturesService } from 'src/app/core/services/pictures.service';

@Component({
  selector: 'app-picture-management',
  templateUrl: './picture-management.component.html',
  styleUrls: ['./picture-management.component.css'],
})
export class PictureManagementComponent implements OnInit {

  constructor(private pictureService: PicturesService) {}
  artData: PictureModel[] = [];

  ngOnInit(): void {
    this.pictureService.getPicturesAllData().subscribe(data => {
      this.artData.push(...data);
    });
  }

  inStockFunction(stock: boolean): string {
    if(stock === true) {
      return 'קיים במלאי'
    }
    return 'לא קיים במלאי'
  }
}
