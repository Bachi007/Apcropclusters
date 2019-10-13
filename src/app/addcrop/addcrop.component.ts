import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcropService } from '../service/addcrop.service';
import swal from 'sweetalert';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addcrop',
  templateUrl: './addcrop.component.html',
  styleUrls: ['./addcrop.component.css']
})
export class AddcropComponent implements OnInit {
  res: any;
  closeResult: string;
  [x: string]: any;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private addCrop:AddcropService,private modalService: NgbModal) { }
  addcrop(content){
    var crop={
      "seller":this.username,
      "village":this.village,
      "pincode":this.pincode,
      "crop":this.crop,
      "cropDesc":this.cropDesc
    }
    
    this.addCrop.addCrop(crop).subscribe(result=>{
      console.log(result);
      this.res=result['data'];
      
      if(this.res!=null){
        
      swal("","Added Successfully","success")
      this.router.navigateByUrl('/addcrop');
        
      }
    })
  }
  vieworder(content){
    
    this.admin=JSON.parse(localStorage.getItem('isLoggedIn')); 
    this.username=this.admin.namw;
     this.addCrop.view(this.username).subscribe(res=>{
       this.orders=res;
       console.log(res);
       
     })
    
  }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;



  ngOnInit() {
  }

}
