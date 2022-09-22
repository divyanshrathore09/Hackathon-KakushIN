import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

 
public myForm!: FormGroup;

  username!: string;
  mobile!: string;
  email!: string;
  pass!: string;
  copass!: string;
  constructor(private formBuilder: FormBuilder,private http : HttpClient, private router: Router) {
   }
   ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username:['',Validators.required],
      mobile:['', Validators.required]
    })
  }
  loginUser(){
    if(this.username==" " && this.mobile==" ")
    {
     alert("Please Fill Up Details");
    }

   
  }
  }
  
