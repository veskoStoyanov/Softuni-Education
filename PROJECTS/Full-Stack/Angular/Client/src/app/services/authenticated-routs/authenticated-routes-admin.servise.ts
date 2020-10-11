import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Auth} from '../auth';


@Injectable()
export class AuthenticatedRouteAdmin implements CanActivate {

    constructor(
        private auth: Auth,
        private router: Router,
        private toastr: ToastrService
        ) {

    }

    canActivate() {
        if(this.auth.isUserAdmin()) {
            return true;
        }   
      
        this.router.navigateByUrl('/catalog');
        this.toastr.error('You are not authorized for this Page!', 'You are Not Admin!');
        return false;
    }
}