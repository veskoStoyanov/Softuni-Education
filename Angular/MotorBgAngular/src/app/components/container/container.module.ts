import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        NavigationComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    exports: [
        FooterComponent,
        NavigationComponent,

    ]
})
export class ContainerModule { }
