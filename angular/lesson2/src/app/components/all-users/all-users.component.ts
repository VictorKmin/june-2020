import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserModel} from "../../models/user.model";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: IUserModel[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(jsonUsers => {
      console.log(jsonUsers);
      this.users = jsonUsers
    })
  }

  ngOnInit(): void {
  }

}
