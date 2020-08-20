import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }
saveUser(user){
  return this.http.post('http://localhost:8080/api/SaveUser/',user)
  .nap((response:Response)=>response.json())
}
GetUser(){
  return this.http.get('http://localhost:8080/api/getUser/')
  .nap((response:Response) => response.json())
}
deleteUser(id){
  return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})
  .nap((response: Response) =>response.json())
}
}

