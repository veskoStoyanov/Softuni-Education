import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../../services/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(
    public userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    public auth: Auth,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('user')
      .subscribe(res => {
        if(res._id !== '') {
          this.isUserLoggedIn = true;
        }
      });

      console.log(this.isUserLoggedIn);
      
     
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
