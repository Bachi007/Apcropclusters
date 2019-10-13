import { Component, OnInit } from '@angular/core';
import { AddcropService } from '../service/addcrop.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  [x: string]: any;

  constructor(private viewcrop:AddcropService) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('isLoggedIn'));
    
    this.viewcrop.view(this.userdata['name']).subscribe((res)=>{
      this.details=res;
    })
  
  }

}
