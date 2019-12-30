import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogged: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  logout() {
    this.userService
      .logout()
      .subscribe(success => {


        if (success) {
          window.sessionStorage.clear();
          this.toastr.success('Logged out!', 'Success!')
          this.router.navigate(['/']);
        } else {
          this.toastr.error('Error has occurred!', 'Warning!')
        }
      },
        err => {
          this.toastr.error('Error has occurred!', 'Warning!');
        })
  }
}
