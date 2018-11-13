import { Component, OnInit,ViewChild, ViewChildren, AfterViewInit, ElementRef, HostListener, Input, Injectable, AfterViewChecked, AfterContentInit, ContentChild } from '@angular/core';
import {ModalDirective} from 'mdbootstrap';
import { userRegistrationData } from 'src/app/models/registrationUser.models';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegistrationFormComponent } from '../../registration-form/registration-form.component';

@Component({
  selector: 'app-edit-user-detail',
  templateUrl: './edit-user-detail.component.html',
  styleUrls: ['./edit-user-detail.component.css']
})

export class EditUserDetailComponent implements OnInit , AfterViewInit {

  
  //  editName : string=  "abcd" ;
  //  editRoll:string;
  //  editClass:string;
  //  editAge:string;
  public editThisDetail: userRegistrationData;
  value : string;
constructor(private httpClient: HttpClient, ){}


  //@ViewChild('modalLoginForm') modalLoginForm: ModalDirective;
  @ViewChild('RegistrationFormComponent') registrationFormComponent: RegistrationFormComponent;

 // @ViewChild('focusInput') focusInput: ElementRef; 
 // @HostListener('focusout', ['$event']) public onListenerTriggered(event: any): void { this.setFocusToInput(); } 
 // setFocusToInput() { this.focusInput.nativeElement.focus(); }


 //public registraionComponent :  RegistrationFormComponent;


  editSubmit(editForm: NgForm)
  {
    console.log("asif",this.registrationFormComponent.currentValue);
    //console.log("qqqq", this.editName);
   // console.log(editForm.value);
  }


  pushData()
  {
    
    console.log("asif");
    console.log("asif",this.registrationFormComponent.currentValue);
     this.value = this.registrationFormComponent.currentValue;
     this.httpClient.get<userRegistrationData>("http://127.0.0.1:3000/posts/"+ this.value)
     .pipe(map((response:userRegistrationData) => <userRegistrationData>response)).subscribe((thisData) => 
     { console.log(thisData); this.editThisDetail = thisData;
     }
         );

console.log(this.editThisDetail.regName);
  //   this.editName = this.editThisDetail.regName;
  //  //console.log(editData.regName);
  //   //this.editName =  editData.regName;
  //   //this.editThisDetail = editData;
  //   //this.editName= this.editThisDetail.regName;
  //   this.editRoll= this.editThisDetail.regRoll;
  //   this.editClass= this.editThisDetail.regClass;
  //   this.editAge= this.editThisDetail.regAge;
    //console.log("asif",this.editName);
   
  }

  ngAfterViewInit()
  {
    this.pushData();
  }

  ngOnInit() {
    
    
    //$('#editName').focus();
   
  }

  

}
