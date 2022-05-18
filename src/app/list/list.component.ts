import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 mydata:any;
  constructor(private cm:HttpClient) { 

    cm.get("https://reqres.in/api/users?page=2").
    subscribe((data)=>{console.log(data)});

    console.log(this.mydata);
  }

  ngOnInit(): void {
  }

}
