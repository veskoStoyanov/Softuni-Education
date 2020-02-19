import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motor } from '../../models/Motor';
@Injectable({
  providedIn: 'root'
})
export class MotorService {

  path: string = 'http://localhost:9999/api/motors';
  constructor(private http: HttpClient) { }

  getMotors(): Observable<Array<Motor>> {
    return this.http.get<Array<Motor>>(`${this.path}`);
  }

  getSingleMotor(id): Observable<Motor> {
    return this.http.get<Motor>(`${this.path}/${id}`);
  }

  createMotor(data): Observable<Motor> {
    return this.http.post<Motor>(`${this.path}`, JSON.stringify(data))
  }

  likeMotor(motoId, userId): Observable<Motor> {
    return this.http.put<Motor>(`${this.path}/like/${motoId}`, JSON.stringify({ userId }))
  }

  deleteMotor(motoId): Observable<Motor> {
    return this.http.delete<Motor>(`${this.path}/${motoId}`)
  }

  editMotor(data, id): Observable<Motor> {
    return this.http.put<Motor>(`${this.path}/${id}`, JSON.stringify(data))
  }
}
