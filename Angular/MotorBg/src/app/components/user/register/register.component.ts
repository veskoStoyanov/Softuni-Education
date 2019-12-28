import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from 'src/app/models/User';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit() {
  }



  register(formData) {
    this.userService
      .register(formData.username, formData.password)
      .subscribe(data => {
       
      })
  }
}
