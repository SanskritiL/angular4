import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

//2 way data binding: ng model
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
    this.name = "Ronish Shrestha";
    
  }
  addHobby(hobby){
    console.log(hobby);
   this.hobbies.unshift(hobby);
   return false;
   //something related to event bubbling/propagation
  }
  remove(hobby){
    for(let i =0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);

      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}