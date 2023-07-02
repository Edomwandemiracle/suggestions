import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl:string = 'https://suggestion-api.onrender.com'
constructor(private http: HttpClient) { }

getUser(): Observable<User>{
  return this.http.get<User>(`${this.baseUrl}/users/random`)
}
}
