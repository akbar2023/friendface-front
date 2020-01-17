import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './service/websocket.service';
import { ChatService } from './service/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from './model/chat-message';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FriendFace';
  messages: ChatMessage[];

  constructor(private websocketService: WebSocketService, private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.websocketService.listenToMessages().subscribe(msg => {
      console.log('Response from websocket: ', msg);
    });

    this.getMessages();
  }

  getMessages() {
    return this.chatService.getMessages().subscribe((data) => {
      // console.log(data);
      this.messages = data;
    });
  }

}
