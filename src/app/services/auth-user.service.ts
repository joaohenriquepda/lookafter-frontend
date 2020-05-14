import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.serverUrl + '/users', user, httpOptions);
  }

  authUser( data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.serverUrl + '/auth/login', data, httpOptions);
  }

  getProfile(token, id) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    return this.http.get(environment.serverUrl + '/users/' +id, httpHeaders);
  }


  recoveryPassword(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.serverUrl + '/users/recovery', data, httpOptions);
  }
}
