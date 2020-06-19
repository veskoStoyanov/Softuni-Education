import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MotorService } from '../../services/motor/motor.service';

import { MotorsComponent } from './motors/motors.component';
import { MotoDetailsComponent } from './moto-details/moto-details.component';
import { MotorComponent } from './motor/motor.component';
import { CreateMotorComponent } from './create-motor/create-motor.component';
import { MotoEditComponent } from './moto-edit/moto-edit.component';


@NgModule({
  declarations: [
    MotorsComponent,
    MotorComponent,
    MotoDetailsComponent,
    CreateMotorComponent,
    MotoEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [MotorService]
})
export class CatalogModule { }
