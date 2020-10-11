// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Custome Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import {CatalogModule} from './components/catalog/catalog.module';
import {UserModule} from './components/user/user.module';
import {ContainerModule} from './components/container/container.module';
import {VideoModule} from './components/video/video.module'


import { userReducer } from './store/reducers/user.reducer';
import {TokenInterceptor} from './services/interceptors/token.interceptor';

//Componnents
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
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
     multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
