import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoEditComponent } from './moto-edit.component';

describe('MotoEditComponent', () => {
  let component: MotoEditComponent;
  let fixture: ComponentFixture<MotoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
