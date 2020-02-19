import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from 'src/app/models/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required])
  });

  alert: any = null;
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }
  ngOnInit() {
  }



  register() {

    if (this.form.get('password').value !== this.form.get('rePassword').value) {
      this.alert = 'Password and re-Password do not match!'
    }

    this.userService

      .register(this.form.get('username').value, this.form.get('password').value)
      .subscribe(data => {

        if (data['success']) {
          console.log(data['success'])
          this.toastr.success('Register In!', 'Success!');
          this.router.navigate(['/login'])
        } else {
          this.toastr.error('Error ocurs please try again!', 'Warning')
        }
      },
        err => {
          this.toastr.error('Error ocurs please try again!', 'Warning!')

        })
  }
}
