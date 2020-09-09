import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {FullUserInfoComponent} from "./components/full-user-info/full-user-info.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent,
    // children: [
    //   {path: '3', component: FullUserInfoComponent}
    // ]
  },
  {path: 'users/:id', component: FullUserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
