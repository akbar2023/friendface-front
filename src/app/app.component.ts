import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './service/websocket.service';
import { ChatService } from './service/chat.service';
import { ChatMessage } from './model/chat-message';
import { WebSocketTopic } from './model/websocket-message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FriendFace';
  // export class AppComponent implements OnInit {
  // messages: ChatMessage[];

  // constructor(private websocketService: WebSocketService, private chatService: ChatService) { }

  // ngOnInit(): void {
  //   this.getMessages();

  //   this.websocketService.listenToMessages<ChatMessage>(WebSocketTopic.Chat).subscribe(msg => {
  //     console.log('Response from websocket: ', msg);
  //     return this.messages.push(msg);
  //   });
  // }

  // getMessages() {
  //   return this.chatService.getMessages().subscribe((data) => {
  //     console.log('Saved messages: ', data);
  //     this.messages = data;
  //   });
  // }
}
