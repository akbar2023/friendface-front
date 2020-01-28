import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { WebSocketMessage } from '../model/websocket-message';
import { filter, map } from 'rxjs/operators';
import { WebSocketDataType, WebSocketTopic } from '../model/websocket-message';



@Injectable({
  providedIn: 'root'
})


export class WebSocketService {
  websocket: WebSocketSubject<WebSocketMessage> = webSocket('ws://localhost:3001');

  constructor() { }

  sendMessage<T extends WebSocketDataType>(topic: WebSocketTopic, data: T) {
    this.websocket.next({
      topic,
      data
    });
  }

  listenToMessages<T extends WebSocketDataType>(filterTopic?: WebSocketTopic): Observable<T> {
    return this.websocket.asObservable().pipe(
      filter(message => filterTopic ? message.topic === filterTopic : true),
      map(message => message.data as T)
    );
  }
}
