import { Component, OnInit } from '@angular/core';
import { AddcropService } from '../service/addcrop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  [x: string]: any;

  constructor(private viewcrop:AddcropService,private router:Router) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  logout(){
    
    localStorage.removeItem("isLoggedIn");
    this.router.navigateByUrl('/login')
    }
  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('isLoggedIn'));
    
    this.viewcrop.view(this.userdata['name']).subscribe((res)=>{
      this.details=res;
    })
  
  }

}
