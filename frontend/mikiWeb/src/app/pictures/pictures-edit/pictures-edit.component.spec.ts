import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesEditComponent } from './pictures-edit.component';

describe('PicturesEditComponent', () => {
  let component: PicturesEditComponent;
  let fixture: ComponentFixture<PicturesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
