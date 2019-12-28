import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) { }

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

  login(formData){
    this.userService
      .login(formData.username, formData.password)
      .subscribe(data => {
        this.authenticateUser(data)
      })    
  }

}
