import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { ChatMessage } from '../model/chat-message';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { WebSocketService } from '../service/websocket.service';
import { WebSocketTopic } from '../model/websocket-message';
import { observable } from 'rxjs';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  messages: ChatMessage[];

  messageForm = new FormGroup({
    // author: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });


  constructor(private chatService: ChatService, private userService: UserService, private websocketService: WebSocketService) { }

  ngOnInit() {
    this.userService.getUserName().subscribe(name => console.log(name, '--message sent'));
  }

  onSubmit() {
    // this.chatService.postMessage({
    //   author: this.messageForm.value.author,
    //   body: this.messageForm.value.body,
    //   channel: this.messageForm.value.channel,
    // }).subscribe(chat => console.log('okay', chat, 'OK'));


    this.websocketService.sendMessage(WebSocketTopic.Chat, {
      author: '',
      channel: '',
      body: this.messageForm.value.body,
    });


  }



}
