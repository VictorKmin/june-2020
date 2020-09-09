import {Component, Input, OnInit} from '@angular/core';

import {IUserModel} from "../../models/user.model";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() y: IUserModel
  // @Input() user: IUserModel


  constructor() {
  }

  ngOnInit(): void {
  }

}
