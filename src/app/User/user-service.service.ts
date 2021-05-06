import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { GenericServiceService } from '../generic-service.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends GenericServiceService<User>{

  updateUserCollection : User;
  constructor(protected http :HttpClient) {
    super(http,'User');
   }

   login(body: User): Observable<User> {
    return this.http.post<User>(this.apiUrl+'/api/User/Login', body);
  }
}
