import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) { }
  
  getUsers(page: number): Observable<Object> {
    return this._http.get(`${environment.apiUrl}/users?page=${page}`);
  }
}
