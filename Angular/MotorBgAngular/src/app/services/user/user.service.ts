import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {
roles: any;
  path: string = 'http://localhost:9999/api/user';

  constructor(private http: HttpClient) { }

  private createUserHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  }


  register(username, password): Observable<User> {
    return this.http.post<User>(`${this.path}/register`, JSON.stringify({ username, password }), {
      withCredentials: true,
      headers: this.createUserHeaders()
    })}

  login(username, password): Observable<User>{
    return this.http.post<User>(`${this.path}/login`, JSON.stringify({ username, password }), {
      withCredentials: true,
      headers: this.createUserHeaders()
    })}

    logout(){
      return this.http.post<User>(`${this.path}/logout`, { }, {
        withCredentials: true,
        headers: this.createUserHeaders()
      })}

      getToken() {
        
      }

      isAuth(): boolean {
        return window.sessionStorage.getItem('token') !== null;
      }

      isUserAdmin () {
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
