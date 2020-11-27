import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureAddComponent } from './picture-add.component';

describe('PictureAddComponent', () => {
  let component: PictureAddComponent;
  let fixture: ComponentFixture<PictureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
