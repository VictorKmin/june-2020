import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { FullUserInfoComponent } from './components/full-user-info/full-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleUserComponent,
    HomeComponent,
    AllUsersComponent,
    FullUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
