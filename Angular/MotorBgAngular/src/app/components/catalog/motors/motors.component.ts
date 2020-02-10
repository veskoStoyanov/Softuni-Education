import { Component, OnInit } from '@angular/core';
import { MotorService } from '../../../services/motor/motor.service';
import { Motor } from '../../../models/Motor';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent implements OnInit {
motors: Array<Motor>;
searchedMotor: any;

form = new FormGroup({
  searchValue: new FormControl(''),
 
});
  constructor(private motorService: MotorService, private router: Router) { }

  ngOnInit() {
   
  }

  search() {

    
    this.motorService
    .getMotors()
    .subscribe(data => {

      this.motors = data.filter(p => p.model.toLowerCase().startsWith(this.form.get('searchValue').value.toLowerCase()));
  
  
    }); 
  }
}

