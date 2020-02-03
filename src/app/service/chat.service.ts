import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly apiUrl = '/api/chat-messages';

  constructor(private http: HttpClient) { }


  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.apiUrl);
  }

  // ** Not Used Anymore but could be used
  // postMessage(message: ChatMessage): Observable<ChatMessage> {
  //   console.log('Here: ' +  message.body);
  //   return this.http.post<ChatMessage>(this.apiUrl, message);
  // }

}
