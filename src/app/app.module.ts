import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PollComponent } from './home/poll/poll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddpollComponent } from './addpoll/addpoll.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AppserviceService } from './service/appservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    HomeComponent,
    AboutComponent,
    PollComponent,
    NavbarComponent,
    AddpollComponent,
    AllusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
