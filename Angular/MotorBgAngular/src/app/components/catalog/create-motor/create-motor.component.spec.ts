import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotorComponent } from './create-motor.component';

describe('CreateMotorComponent', () => {
  let component: CreateMotorComponent;
  let fixture: ComponentFixture<CreateMotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
