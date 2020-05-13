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


  recoveryPassword(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.serverUrl + '/users/recovery', data, httpOptions);
  }
}
