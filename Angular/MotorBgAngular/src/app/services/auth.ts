import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class Auth {
    roles: any;

    constructor() { }

    getUserId(): string {
        return window.sessionStorage.getItem('userId');
    }

    isAuth(): boolean {
        return window.sessionStorage.getItem('token') !== null;
    }

    isUserAdmin(): boolean {
        this.roles = window.sessionStorage.getItem('roles')
        if (!this.roles) {
            return false
        }

        this.roles = this.roles.split()
        if (this.roles.includes('Admin')) {

            return true
        }

        return false
    }
}