import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {

  constructor() { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  ngOnInit() {
  }

}
