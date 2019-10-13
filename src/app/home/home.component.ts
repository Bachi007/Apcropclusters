import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;

  ngOnInit() {
  }

}
