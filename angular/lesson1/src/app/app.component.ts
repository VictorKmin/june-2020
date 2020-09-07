import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {IUserModel} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: IUserModel[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(jsonUsers => {
      console.log(jsonUsers);
      this.users = jsonUsers
    })
  }

}
