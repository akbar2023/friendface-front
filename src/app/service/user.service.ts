import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private name$: BehaviorSubject<string> = new BehaviorSubject(null);


  constructor() {}


  getUserName() {
    return this.name$.asObservable();
  }

  setUserName(name: string) {
    this.name$.next(name);
  }

}
