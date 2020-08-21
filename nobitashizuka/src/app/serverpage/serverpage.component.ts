import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-serverpage',
  templateUrl: './serverpage.component.html',
  styleUrls: ['./serverpage.component.css']
})
export class ServerpageComponent implements OnInit {

  public getValue : any;
  public getValueMap : any;

  constructor(public ds:DataService) {
   }

  ngOnInit(): void {
    this.ds.getData();
    this.ds.getDataSubject$.subscribe((res) => {
      this.getValue = res;
      this.getValueMap = new Map(
        this.getValue.map(x=>[x])
      )
    })
    console.log("get data : ", this.getValueMap);
  }

}