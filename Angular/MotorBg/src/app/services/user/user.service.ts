import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {

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
      return this.http.post(`${this.path}/logout`, { }, {
        withCredentials: true,
        headers: this.createUserHeaders()
      })}
}
