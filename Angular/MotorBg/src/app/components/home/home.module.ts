import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [HomeComponent,
        AboutComponent],
    imports: [CommonModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
        ])],
})
export class HomeModule {

}