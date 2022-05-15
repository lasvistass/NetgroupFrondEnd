import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = [];


  constructor(private Userservice: UserDataService) { }

  ngOnInit(): void {
    this.Userservice.getUser().subscribe(

      response => {
        console.log('test');
        this.users = response;
        console.log(this.users.length);
      },
      error => {
        console.log(error);
      }
    )

  }

}
