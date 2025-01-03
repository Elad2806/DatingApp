import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';
import { Member } from '../_models/member';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient, private accountService: AccountService) { }
  baseUrl = environment.apiUrl;

  getMembers() : Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users', this.getHttpHeaders());
  }

  getMember(username: string): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + 'users/' + username, this.getHttpHeaders());
  }

  getHttpHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accountService.currentUser()?.token}` 
      })
    }
  }
}
