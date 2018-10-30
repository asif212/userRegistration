import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userRegistrationData } from 'src/app/models/registrationUser.models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
 
  registrationDetail: userRegistrationData;
  constructor(private httpClient:HttpClient) {  }
  registrationSubmit(registrationForm: NgForm):void
  {
    console.log(registrationForm.value);
    // window.localStorage.setItem("userData",registrationForm.value);
    // window.localStorage.getItem("userData");
    this.registrationDetail = registrationForm.value;
    
    this.httpClient.post("http://127.0.0.1:3000/posts",
        this.registrationDetail)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        ); 
    alert("successful");

  
    console.log(window.localStorage.getItem("userData"));

  }
 
  
  ngOnInit() {
  }

}
