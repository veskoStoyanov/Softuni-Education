import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import {MotorsComponent} from './components/catalog/motors/motors.component';
import {CreateMotorComponent} from './components/catalog/create-motor/create-motor.component';
import { MotoDetailsComponent } from './components/catalog/moto-details/moto-details.component';
import { MotoEditComponent } from './components/catalog/moto-edit/moto-edit.component';
import { VideoAdminPanelComponent } from './components/video/video-admin-panel/video-admin-panel.component';
import { PlayVideoComponent } from './components/video/play-video/play-video.component';

const routes: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component:  MotorsComponent},
    { path: 'create/motor', component:  CreateMotorComponent},  
    { path: 'motor/:id', component:  MotoDetailsComponent},
    { path: 'motor/edit/:id', component:  MotoEditComponent},  
    { path: 'video/panel', component:  VideoAdminPanelComponent}, 
    { path: 'videos', component:  PlayVideoComponent}, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}