import { Component, OnInit } from '@angular/core';
import { ViewcropService } from '../service/viewcrop.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  [x: string]: Object;
  closeResult: string;
  qtn: Object;
  details:any=[];
  query: any;
  modalRef: any;
  getDismissReason: any;
  buyername: any;
  mobile: any;
  email: any;

  constructor(private view:ViewcropService,private modalService: NgbModal,private router:Router) { }

  ngOnInit() {
  }
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
    console.log(bookcrop);
  }
  
  logout(){
    
    localStorage.removeItem("isLoggedIn");
    this.router.navigateByUrl('/login')
    }
  crops(){

    var query={
      "village":this.query
    }
        this.view.getcrop(query).subscribe(res=>{
          console.log(res);
          this.details=res;
          localStorage.setItem('iscart',JSON.stringify(res));
        })
  
  }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;


 
}
