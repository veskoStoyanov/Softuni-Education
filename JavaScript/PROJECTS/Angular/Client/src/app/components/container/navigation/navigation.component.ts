import { Component, OnInit, DoCheck} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../../services/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {Logout} from '../../../store/actions/user.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {
  
  isUserLoggedIn: boolean = false;
  username: string;
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
  }

  ngDoCheck(): void {
    this.isUserLoggedIn = this.auth.isAuth();
     this.username = this.auth.getUserName();
  }

  logout() {
    this.userService
      .logout()
      .subscribe(success => {

        if (success) {
          window.sessionStorage.clear();
          this.store.dispatch(new Logout(success));
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
