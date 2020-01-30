import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { ReplaySubject, BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WebSocketDataType } from '../model/websocket-message';
import { ConnectedUser } from '../model/connected-user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiConnectedUsersUrl = '/api/connected-users';

  private name$: BehaviorSubject<string> = new BehaviorSubject(null);

  isLoggedIn = false;

  constructor(private router: Router, private http: HttpClient) { }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  // logout(): Observable<boolean> {
  //   return of(false).pipe(
  //     delay(1000),
  //     tap((val) => {this.isLoggedIn = false; this.router.navigate(['']);
  //     })
  //   );
  // }


  getUserName() {
    return this.name$.asObservable();
  }

  setUserName(name: string) {
    this.name$.next(name);
    this.isLoggedIn = true;
  }

  // getMessages(): Observable<ChatMessage[]> {
  //   return this.http.get<ChatMessage[]>(this.apiUrl);
  // }

  getConnectedUser(): Observable<ConnectedUser[]> {
    return this.http.get<ConnectedUser[]>(this.apiConnectedUsersUrl);
  }

}
