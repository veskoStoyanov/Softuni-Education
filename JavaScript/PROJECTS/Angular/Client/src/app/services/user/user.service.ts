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


  register(username, password): Observable<User> {
    return this.http.post<User>(`${this.path}/register`, JSON.stringify({ username, password }))
  }

  login(username, password): Observable<User> {
    return this.http.post<User>(`${this.path}/login`, JSON.stringify({ username, password }))
  }

  logout() {
    return this.http.post<User>(`${this.path}/logout`, {})
  }

}
