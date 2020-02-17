import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import { HomeModule } from './components/home/home.module';
import {CatalogModule} from './components/catalog/catalog.module';
import {UserModule} from './components/user/user.module';
import {ContainerModule} from './components/container/container.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VideoModule} from './components/video/video.module'
import { userReducer } from './store/reducers/user.reducer';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CatalogModule,
    UserModule,
    ContainerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    VideoModule,
    StoreModule.forRoot ({
      user: userReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
