import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddpollComponent } from './addpoll/addpoll.component';
import { AllusersComponent } from './allusers/allusers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path:"", component:LoginComponent , pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'signup', component:RegisterUserComponent},
  { path:'about', component:AboutComponent},
  { path:'addpoll', component:AddpollComponent},
  { path:'allusers', component:AllusersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
