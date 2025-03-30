import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../shared/models/user.data';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   API_CONFIG = '';


  constructor() { }

  // login(user: User): Observable<User> {
  //   return this.http.post<User>(this.API_CONFIG, user)
  //     .pipe(
  //       catchError(this.handleError('login', user))
  //     );

}

