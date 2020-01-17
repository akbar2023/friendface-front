import { Component } from '@angular/core';
import { WebSocketService } from './service/websocket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FriendFace';

  constructor(private websocketService: WebSocketService) {
    this.websocketService.listenToMessages().subscribe(msg => {
      console.log('Response from websocket: ', msg);
    });
  }
}
