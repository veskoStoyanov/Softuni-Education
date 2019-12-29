import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from 'src/app/models/User';
import {FormGroup, FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({username:  new FormControl('', [Validators.required, Validators.minLength(3)]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  rePassword: new FormControl('', [Validators.required])});

  alert: any = null;
  constructor(private userService: UserService) { }
  ngOnInit() {
  }



  register() {

    if(this.form.get('password').value !== this.form.get('rePassword').value) {
      this.alert = 'Password and re-Password do not match!'
    }
    
    this.userService

      .register(this.form.get('username').value, this.form.get('password').value)
      .subscribe(data => {
       console.log(data);
       
      })
  }
}
