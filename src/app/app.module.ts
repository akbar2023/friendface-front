import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SendMessageComponent } from './send-message/send-message.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './service/user.service';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: { title: 'FriendFace: Login' }
  },
  {
    path: 'messages',
    canActivate: [AuthGuard],
    component: MessageBoardComponent,
    data: { title: 'FriendFace: Messages' }
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
