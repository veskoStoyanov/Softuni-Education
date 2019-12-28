import { Component, OnInit } from '@angular/core';
import {MotorService} from '../../../services/motor/motor.service';

@Component({
  selector: 'app-create-motor',
  templateUrl: './create-motor.component.html',
  styleUrls: ['./create-motor.component.css']
})
export class CreateMotorComponent implements OnInit {

  constructor(private motorService: MotorService) { }

  ngOnInit() {
  }
    createMotor (motorData) {    
      motorData['userId'] = sessionStorage.getItem('userId');
      this.motorService
      .createMotor(motorData)
      .subscribe(data => {    
      })
    } 
}
