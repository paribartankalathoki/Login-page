import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  onSubmit(login, value: any) {
    const domainName = 'texasintl.edu.np';
    value.domainName =  domainName;
    value.client = 'WEB';
    this.httpClient.post('https://devapp.texasintl.edu.np/auth//api/v1/login', value, {
      headers: new HttpHeaders().set('domain', domainName )
    }).subscribe(
      data => {
        console.log('userInfo: ', data);
        localStorage.setItem('user', JSON.stringify(data));
        const d = JSON.parse(localStorage.getItem('user'));
        this.cookieService.set('token', d.user.token);
        this.cookieService.set('fullName', d.user.firstName + ' ' + d.user.lastName);
        this.cookieService.set('loginId', d.user.loginId);
        this.cookieService.set('userRole', d.user.userRole);
        this.cookieService.set('username', d.user.username);
        this.cookieService.set('id', d.user.id);
        this.cookieService.set('team', d.user.team);

        if (d.user.token) {
          this.router.navigate(['/user']);
        }
      }
    );
  }

}
