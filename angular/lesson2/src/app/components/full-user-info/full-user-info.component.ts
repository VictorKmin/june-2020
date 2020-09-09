import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.component.html',
  styleUrls: ['./full-user-info.component.css']
})
export class FullUserInfoComponent implements OnInit {
  id: number
  qp: any;

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.queryParams.subscribe(value => {
      console.log(value, 'QUERY');
      this.qp = value
    })

    this.activatedRouter.params.subscribe(value => {
      console.log(value, 'PARAMS');
      this.id = value.id
    })
  }


  ngOnInit(): void {
  }

}
