import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Auth} from '../auth';


@Injectable()
export class AuthenticatedRoute implements CanActivate {

    constructor(
        private auth: Auth,
        private router: Router,
        private toastr: ToastrService
        ) {

    }

    canActivate() {
        if(this.auth.isAuth()) {
            return true;
        }   
      
    this.router.navigateByUrl('/login');
      this.toastr.error('You are not authorized for this Page!', 'Please LogIn first!');
        return false;
    }
}