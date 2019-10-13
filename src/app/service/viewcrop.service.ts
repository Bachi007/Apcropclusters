import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewcropService {

  constructor(private http:HttpClient) { }
  getcrop(village){
    return this.http.post('http://localhost:3000/getCrop',village);
  }
  cropname(crop){
    return this.http.post('http://localhost:3000/cropname',crop);
  }
  book(details){
    return this.http.post('http://localhost:3000/book',details);
  }
  
}
