import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {

  constructor(private router:Router) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  logout(){
    
    localStorage.removeItem("isLoggedIn");
    this.router.navigateByUrl('/login')
    }
  ngOnInit() {
  }

}
