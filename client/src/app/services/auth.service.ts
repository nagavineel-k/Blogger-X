import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendServiceUrl = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  register(user): Observable<any> {
    return this.http.post(`${this.backendServiceUrl}/authentication/register`, user)
  }

  checkUsername(username): Observable<any> {
    return this.http.get(`${this.backendServiceUrl}/authentication/checkUsername/` + username)
  }
  checkEmail(email): Observable<any> {
    return this.http.get(`${this.backendServiceUrl}/authentication/checkEmail/` + email)
  }

}
