import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {CookieService} from 'ngx-cookie-service';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CookieService]
})
export class AppRoutingModule { }
