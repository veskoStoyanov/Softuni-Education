import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../models/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  path: string = 'http://localhost:9999/api/video';
  constructor(private http: HttpClient) { }

  private createUserHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  }

  getVideos(): Observable<Array<Video>> {
    return this.http.get<Array<Video>>(`${this.path}`);
  }

  deleteVideo(videoId): Observable<Video> {
    return this.http.delete<Video>(`${this.path}/${videoId}`, {
      withCredentials: true,
      headers: this.createUserHeaders()
    })
  }

  createVideo(data): Observable<Video> {
    return this.http.post<Video>(`${this.path}`, JSON.stringify(data), {
      withCredentials: true,
      headers: this.createUserHeaders()
    })
  }

}
