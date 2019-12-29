import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';

import {MotorService} from '../../../services/motor/motor.service';

@Component({
  selector: 'app-create-motor',
  templateUrl: './create-motor.component.html',
  styleUrls: ['./create-motor.component.css']
})
export class CreateMotorComponent implements OnInit {
  form = new FormGroup({
  city:  new FormControl('', [Validators.required]),
  model: new FormControl('', [Validators.required, Validators.minLength(3)]),
  image: new FormControl('', [Validators.required, Validators.minLength(5)]),
  price: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required, Validators.minLength(10)])});

  data: Object;
  constructor(private motorService: MotorService) { }

  ngOnInit() {
  }
    createMotor () {   
       
      this.data = {
        city: this.form.get('city').value,
        model: this.form.get('model').value,
        image: this.form.get('image').value,
        price: this.form.get('price').value,
        description: this.form.get('description').value,
        userId: sessionStorage.getItem('userId')
      }

      console.log(this.data);
      

      this.motorService
      .createMotor(this.data)
      .subscribe(data => {    
      })
    } 
}
