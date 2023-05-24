import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(
    user: User
  ): Observable<User> {
    return this.http.post<User>(`${env.BASE_URL}/userProfile`, user);
  }

}
