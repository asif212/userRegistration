import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  constructor() { }
  registrationSubmit(registrationForm: NgForm):void
  {
    console.log(registrationForm.value);
    // window.localStorage.setItem("userData",registrationForm.value);
    // window.localStorage.getItem("userData");
    var filepath = "c:/Users/ASIF/Desktop/logincheck.json";
    var userDataToAdd = registrationForm.value +",";
    var fileToWrite = [new Blob([""],{type: "text/plain" }),userDataToAdd,new Uint16Array([33])];
    var file = new File(fileToWrite,filepath);
    

  
    console.log(window.localStorage.getItem("userData"));

  }
  ngOnInit() {
  }

}
