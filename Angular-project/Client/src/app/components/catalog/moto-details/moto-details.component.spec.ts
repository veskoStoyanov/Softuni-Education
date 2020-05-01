import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetailsComponent } from './moto-details.component';

describe('MotoDetailsComponent', () => {
  let component: MotoDetailsComponent;
  let fixture: ComponentFixture<MotoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
