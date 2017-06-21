import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../common/models/user.model'
import { UserService } from '../../common/services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<UserModel> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('Users Admin Comp');

     this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
  }

  delete(user){
    console.log(user)
  }
}