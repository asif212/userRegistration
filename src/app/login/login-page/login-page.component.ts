import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  loginData: any;
  //myroute:Router;
  validationSuccesful:boolean = false;
  constructor(private httpserver: HttpClient,public myroute:Router) {
    this.getData();
  }


  onSubmit(loginForm: NgForm): void {
    if (this.validate(loginForm, this.loginData)) {
      alert("Matched");
            this.myroute.navigateByUrl("/registration");
            this.validationSuccesful=true;
            alert("ok");
           // window.location.href='/registration';
    } else {
      alert("doesnot matched");
    }
  }

  getData(): void {
    this.httpserver.get('../assets/logincheck.json')
      .subscribe(data => { this.loginData = data }, (err: HttpErrorResponse) =>
        console.log(err.message))
  }


  validate(loginForm, loginData): boolean {
    for (var key in loginData) {
      if (loginData.hasOwnProperty(key)) {
        var element = loginData[key];
        //console.log(loginForm.value | JSON);
        if (loginForm.value.username == element.username) {
          if (loginForm.value.password == element.password) {
            return true;
          } else {
            return false;
          }
        }
        return false;
      }
    }
  }


}
