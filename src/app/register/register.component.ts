import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { HttpClient } from '@angular/common/http'
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  constructor(private http:HttpClient,private user:RegisterService,private router:Router) { }
register(){
  var user={
  "name":this.name,
  "email":this.email,
  "village":this.village,
  "mobile":this.mobile,
  "password":this.password,
  "passwordConf":this.passwordConf,
  "role":"user"
  }
  this.user.user(user).subscribe(result=>{
    this.res=result;
    if(this.res!=null){
      alert('successfully registered')
      this.router.navigateByUrl('/login')
    }
  })
}
  ngOnInit() {
    
  }

}
