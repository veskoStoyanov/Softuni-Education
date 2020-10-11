import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UserService } from '../../services/user/user.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [UserService]
})
export class UserModule { }
