import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../../services/video/video.service';
import {Video} from '../../../models/Video';


@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit {
  videos: Array<Video>;
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService
    .getVideos()
    .subscribe(data => {
      this.videos = data;
    })
  }


}
