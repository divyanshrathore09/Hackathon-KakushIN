import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from  "@angular/forms"
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public loginform!: FormGroup
  email!: string;
  password!: string;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email:['',Validators.required],
      password:['', Validators.required]
    })
  }
  loginUser(){
    if(this.email=="admin@gmail.com" && this.password=="admin@123")
    {
     alert("Admin Login Successfully");
    }
    else{
      alert("Invalid Credential");
    }
   
  }

}
