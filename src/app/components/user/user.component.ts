import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Lawrence Valiquette';
    this.age = 30;
    this.email = 'test@test.com';
    this.address = {
      street: '123 elm street',
      city: 'Chicago',
      state: 'IL'
    };
    this.hobbies = ['Write code', 'Play video games', 'Listen to music'];
  }

  onClick() {
    this.name = 'Lawrence Valiquette II';
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}
