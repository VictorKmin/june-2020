import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

}
