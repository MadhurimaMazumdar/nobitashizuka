import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { tap, filter, scan } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }
// saveUser(user){
//   return this.HttpClient.post('http://localhost:8080/api/SaveUser/',user)
//   // .map((response:Response)=>response.json())
// }
// GetUser(){
//   return this.HttpClient.get('http://localhost:8080/api/getUser/')
//   // .map((response:Response) => response.json())
// }
// deleteUser(id){
//   return this.HttpClient.post('http://localhost:8080/api/deleteUser/',{'id': id})
//   // .map((response: Response) =>response.json())
// }

public getDataSubject = new Subject;
getDataSubject$ = this.getDataSubject.asObservable();

getData()
{
  return this.HttpClient.get('http://localhost:8080/api/getUser/').subscribe(
    data => {
      this.getDataSubject.next(data);
    }
  )
}

}

