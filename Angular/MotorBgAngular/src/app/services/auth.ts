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

    getUserName(): string {
        return window.sessionStorage.getItem('username');
    }

    isAuth(): boolean {
        return window.sessionStorage.getItem('authToken') !== null;
    }

    isGest(): boolean {
        return window.sessionStorage.getItem('authToken') === null;
    }

    isUserOnly(): boolean {
        if (this.isAuth() && !this.isUserAdmin()) {
            return true
        }
        return false
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