import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataSharingService } from '../../../services/dataSharingService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(
    public userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private dataSharingService: DataSharingService
    ) { 

      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
    }

  ngOnInit() {
    
  }

  logout() {
    this.userService
      .logout()
      .subscribe(success => {


        if (success) {
          window.sessionStorage.clear();
          this.toastr.success('Logged out!', 'Success!')
          this.dataSharingService.isUserLoggedIn.next(false);
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
