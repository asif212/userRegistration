import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userRegistrationData } from 'src/app/models/registrationUser.models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    UserDataList_observable: Observable<userRegistrationData[]>;
    UserDataList : userRegistrationData[];
    registrationDetail: userRegistrationData;
    constructor(private httpClient: HttpClient) { }
    
    
    registrationSubmit(registrationForm: NgForm): void {
        //console.log(registrationForm.value);
        // window.localStorage.setItem("userData",registrationForm.value);
        // window.localStorage.getItem("userData");
        this.registrationDetail = registrationForm.value;
        
        //console.log(this.showDataOnList());
        this.httpClient.post("http://127.0.0.1:3000/posts",
            this.registrationDetail)
            .subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                    //this.UserDataList = data;
                   
                },
                error => {
                    console.log("Error", error);
                }, () => this.showDataOnList() 
            );
        alert("successful");
        //this.showDataOnList();




    }

    showDataOnList(): void {
         this.httpClient.get<userRegistrationData[]>("http://127.0.0.1:3000/posts")
        .pipe(map((response:userRegistrationData[]) => <userRegistrationData[]>response)).subscribe((thisData) => {this.UserDataList = thisData});
      
    }

    ngOnInit() {
        this.httpClient.get<userRegistrationData[]>("http://127.0.0.1:3000/posts")
        .pipe(map((response:userRegistrationData[]) => <userRegistrationData[]>response)).subscribe((thisData) => {this.UserDataList = thisData});
    }

}
