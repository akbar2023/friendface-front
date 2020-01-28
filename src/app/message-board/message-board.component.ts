import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { WebSocketService } from '../service/websocket.service';
import { ChatService } from '../service/chat.service';
import { WebSocketTopic } from '../model/websocket-message';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  messages: ChatMessage[];

  constructor(private websocketService: WebSocketService, private chatService: ChatService, private userservice: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.websocketService.listenToMessages<ChatMessage>(WebSocketTopic.Chat).subscribe(data => {
      console.log(data, '--Message received from websocket');
      return this.messages.push(data);
    });

    this.getMessages();

    // When user connects
    // this.websocketService.listenToMessages(WebSocketTopic.UserConnected).subscribe(data => {
    //   console.log(data, '--User Connected');
    // });
  }

  getMessages() {
    return this.chatService.getMessages().subscribe((data) => {
      console.log(data, '--Saved messages');
      this.messages = data;
    });
  }

}
