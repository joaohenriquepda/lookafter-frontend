import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor(private http: HttpClient) { }

  registerContact(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.serverUrl + '/contacts', data, httpOptions);
  }


  getAllDiapers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.serverUrl + '/diapers',  httpOptions);
  }


}
