import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { WebSocketService } from '../service/websocket.service';
import { ChatService } from '../service/chat.service';
import { WebSocketTopic } from '../model/websocket-message';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ConnectedUser } from '../model/connected-user.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  messages: ChatMessage[];
  connectedUsers: ConnectedUser[];

  constructor(private websocketService: WebSocketService, private chatService: ChatService, private userservice: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.websocketService.listenToMessages<ChatMessage>(WebSocketTopic.Chat).subscribe(data => {
      console.log(data, '--Message received from websocket');
      // pushes every new messages to the messages array, when receives
      this.messages.push(data);
    });

    this.websocketService.listenToMessages<ConnectedUser>(WebSocketTopic.UserConnected).subscribe(data => {
      console.log(data, '-- User connected from websocket');
      this.connectedUsers.push(data);
    });


    this.getMessages();
    this.getConnectedUsers();
  }

  getMessages() {
    return this.chatService.getMessages().subscribe((data) => {
      console.log(data, '--Old messages');
      // Old messages are saved to the messages array when app is launched
      this.messages = data;
    });
  }

  getConnectedUsers() {
    return this.userservice.getConnectedUser().subscribe((data) => {
      console.log(data, '--Connected Users');
      this.connectedUsers = data;
    });
  }

}
