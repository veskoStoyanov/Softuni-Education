import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  alert: any = null;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  authenticateUser(json) {
    window.sessionStorage.setItem('authToken', json.token);
    window.sessionStorage.setItem('username', json.user.username);
    window.sessionStorage.setItem('userId', json.user._id);
    if (json.user.roles && json.user.roles.length > 0) {
      window.sessionStorage.setItem('roles', json.user.roles)
    }
  }

  login() {


    this.userService
      .login(this.form.get('username').value, this.form.get('password').value)
      .subscribe(data => {
        this.authenticateUser(data);
        if (data['success']) {
          this.toastr.success('Logged In!', 'Success!');
          this.router.navigate(['/catalog'])
        } else {
          this.toastr.error('Error ocurs please try again!', 'Warning')
        }
      },
        err => {
          this.toastr.error('Error ocurs please try again!', 'Warning!')
        })
  }

}
