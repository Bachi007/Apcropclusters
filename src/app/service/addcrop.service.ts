import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddcropService {

  constructor(private http:HttpClient) { }
  addCrop(crop){
    return this.http.post('http://localhost:3000/savecrop',crop);
  }
  
view(Tsdata){
  console.log(Tsdata)
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
let options = { headers: headers };
  return this.http.post("http://localhost:3000/vieworders", {seller:Tsdata},options).pipe(
    map(Response=>Response));

}
}
