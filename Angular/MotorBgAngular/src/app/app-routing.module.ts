import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AuthenticatedRoute } from './services/authenticated-routs/authenticated-routs.service';
import {AuthenticatedRouteAdmin} from './services/authenticated-routs/authenticated-routes-admin.servise';
import {AuthenticatedRouteUser} from './services/authenticated-routs/authenticated-routes-user.servise'
import {AuthenticatedRouteGest} from './services/authenticated-routs/authenticated-routes-gest.servise';

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
import {ChatRoomComponent} from './components/chat-room/chat-room.component';


const routes: Route[] = [
    { path: 'login', component: LoginComponent, canActivate: [AuthenticatedRouteGest] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthenticatedRouteGest] },
    { path: '', component: HomeComponent, canActivate: [AuthenticatedRouteGest] },
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component:  MotorsComponent, canActivate: [AuthenticatedRoute]},
    { path: 'create/motor', component:  CreateMotorComponent, canActivate: [AuthenticatedRoute, AuthenticatedRouteUser]},  
    { path: 'motor/:id', component:  MotoDetailsComponent, canActivate: [AuthenticatedRoute]},
    { path: 'motor/edit/:id', component:  MotoEditComponent, canActivate: [AuthenticatedRoute, AuthenticatedRouteUser]},  
    { path: 'video/panel', component:  VideoAdminPanelComponent, canActivate: [AuthenticatedRoute, AuthenticatedRouteAdmin]}, 
    { path: 'videos', component:  PlayVideoComponent, canActivate: [AuthenticatedRoute]},
    { path: 'chat', component:  ChatRoomComponent,}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthenticatedRoute,
        AuthenticatedRouteAdmin,
        AuthenticatedRouteUser,
        AuthenticatedRouteGest]
})
export class AppRoutingModule {

}