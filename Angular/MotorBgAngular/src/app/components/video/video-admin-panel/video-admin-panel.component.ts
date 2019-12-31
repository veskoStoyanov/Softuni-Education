import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../../../services/video/video.service';
import {Auth} from '../../../services/auth';

@Component({
  selector: 'app-video-admin-panel',
  templateUrl: './video-admin-panel.component.html',
  styleUrls: ['./video-admin-panel.component.css']
})
export class VideoAdminPanelComponent implements OnInit {
  baseUrl: string = 'https://www.youtube.com/embed/';
  
  form = new FormGroup({
    city: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private videoService: VideoService,
    private toastr: ToastrService,
    private router: Router,
    public auth: Auth) { }

  ngOnInit() {
    
  }

}
