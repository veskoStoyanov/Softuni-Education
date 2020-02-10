import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../../../services/video/video.service';
import { Auth } from '../../../services/auth';
import { Video } from '../../../models/Video';
import {
  trigger,
  state,
  animation,
  transition,
  animate,
  style
} from '@angular/animations';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-video-admin-panel',
  templateUrl: './video-admin-panel.component.html',
  styleUrls: ['./video-admin-panel.component.css'],
  animations: [
    trigger('state', [
      transition('void => *', [
        style({
          opacity: -10,
          transform: 'translateX(-200px)'
        }), animate(1000)
      ])
    ])
  ]
})

export class VideoAdminPanelComponent implements OnInit {
  baseUrl: string = 'https://www.youtube.com/embed/';
  videos: Observable<Video[]>;
  data: Object;
  form = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.minLength(5)]),
    model: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(private videoService: VideoService,
    private toastr: ToastrService,
    private router: Router,
    public auth: Auth,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.videos = this.store.select('videos');
  }

  deleteVideo(videoId) {
    this.videoService
      .deleteVideo(videoId)
      .subscribe(data => {
        if (data['success']) {
          this.toastr.success('Video was deleted!', 'Success!');
          this.ngOnInit();
        } else {
          this.toastr.error('Error ocurs please try again!', 'Warning');
        }
      },
        err => {
          this.toastr.error('Error ocurs please try again!', 'Warning');
          console.log(err);
        })
  }

  createVideo() {
    this.data = {
      url: this.baseUrl + this.form.get('url').value.split('=')[1],
      model: this.form.get('model').value,
    }

    this.videoService
      .createVideo(this.data)
      .subscribe(data => {
        if (data['success']) {
          this.toastr.success('Video was created!', 'Success!');
          this.form.reset();
          this.ngOnInit();

        } else {
          this.toastr.error('Error ocurs please try again!', 'Warning');
        }
      },
        err => {
          this.toastr.error('Error ocurs please try again!', 'Warning!');
        })
  }
}
