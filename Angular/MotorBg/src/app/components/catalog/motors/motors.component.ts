import { Component, OnInit } from '@angular/core';
import { MotorService } from '../../../services/motor/motor.service';
import { Motor } from '../../../models/Motor';

@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent implements OnInit {
motors: Array<Motor>
  constructor(private motorService: MotorService) { }

  ngOnInit() {
    this.motorService
    .getMotors()
    .subscribe(data => {
      this.motors = data      
    });
  }
}

