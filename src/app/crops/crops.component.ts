import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewcropService } from '../service/viewcrop.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {
  [x: string]: any;
  closeResult: string;
  qtn: Object;
  details:any=[];
  query: any;
  modalRef: any;
  getDismissReason: any;
  constructor(private modalService: NgbModal,private view:ViewcropService) { }
  
  order(content,query){
    this.query=query
   
    this.modalRef=this.modalService.open(content, {backdrop:false,centered:true,size:'lg'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  orderplace(){
    var bookcrop={
      "crop":this.query.crop,
      "village":this.query.village,
     "seller":this.query.seller,
     "name":this.name,
     "mobile":this.mobile,
     "address":this.address
    }
    this.view.book(bookcrop).subscribe(res=>{
      this.bookconfirm=res;
      if(this.bookconfirm!=null){
        
      swal("","Booked Successfully","success")
        this.modalRef.close()
        this.router.navigateByUrl('/crops');
      }
    })
  }
  search(content,query){
    this.query=query
   
    this.modalRef=this.modalService.open(content, {backdrop:false,centered:true,size:'lg'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
    var cropname={
      "crop":"rice"
    }
        this.view.cropname(cropname).subscribe(res=>{
          console.log(res);
          this.details=res;
        })
  }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  ngOnInit() {
  }

}
