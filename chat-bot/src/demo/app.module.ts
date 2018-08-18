import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from '../app/chat-window/chat-window.component';
import { ChatMsgComponent } from '../app/chat-msg/chat-msg.component';
import { ChatInputComponent } from '../app/chat-input/chat-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatMsgComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export   class  AppModule { }
