import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { WebSocketService } from '../service/websocket.service';
import { WebSocketTopic } from '../model/websocket-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName: any = this.userService.getUserName().subscribe(data => console.log(data));

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });


  constructor(private userService: UserService, private websocketService: WebSocketService, private router: Router) {
  }


  ngOnInit() { }

  onSubmit() {
    this.userService.setUserName(this.profileForm.value.name);
    this.websocketService.sendMessage(WebSocketTopic.Login, { name: this.profileForm.value.name });
    this.router.navigate(['messages']);

    // if (this.userService.login().subscribe(
    //   data => console.log(data, 'LOGIN DONE', this.userName)
    // )) {
    //   this.router.navigate(['messages']);
    // }
  }
}
