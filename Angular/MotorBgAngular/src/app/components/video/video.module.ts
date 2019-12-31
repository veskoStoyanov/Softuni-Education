import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {VideoService} from '../../services/video/video.service';

import { VideoAdminPanelComponent } from './video-admin-panel/video-admin-panel.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { SafePipe } from './savePipe/savePipe';



@NgModule({
  declarations: [VideoAdminPanelComponent, PlayVideoComponent, SafePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [VideoService]
})
export class VideoModule { }
