import { Component } from '@angular/core';
import { WebSocketService } from './service/websocket.service';
import { ChatService } from './service/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FriendFace';

  constructor(private websocketService: WebSocketService, private chatService: ChatService) {
    this.websocketService.listenToMessages().subscribe(msg => {
      console.log('Response from websocket: ', msg);
    });
  }

  showMessage() {
    const message = this.chatService.getMessages();
    console.log('Response from chat service: ' + message);
    return message;
  }
}
