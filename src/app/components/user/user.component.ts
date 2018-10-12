import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  constructor() { 
    console.log('constructor ran');
  }
  ngOnInit() {
    console.log('ng on it ran too');
    this.name = "Sanskriti Lamsal";
    this.age = 30;
    this.address = {
      street: '115 Northgate Drive',
      city: 'Oxford',
      state: 'MS'
    }
    this.hobbies=['Dance','Sing','Make youtube videos'];
    this.hello = 'hello';
  }
  onclick(){
    console.log("Hello")
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}