import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import chatMessage, { ChatMessage } from '../model/chat-message';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  messageForm: FormGroup;


  createForm(message: ChatMessage) {
    this.messageForm = this.fb.group({
      name: message.author,
      body: message.body,
      timestamp: '',
      channel: '',
    });
  }

  constructor(private chatService: ChatService, private fb: FormBuilder) {
    // this.sendMessage();
  }

  ngOnInit() {
  }

  // onSubmit() {
  //     this.chatService.postMessage() {
  //       this.messageForm;
  //     }
  // }

}
