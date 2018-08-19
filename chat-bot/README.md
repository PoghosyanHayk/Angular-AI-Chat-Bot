# Angular AI Chat Bot

<div>
<img src="https://image.ibb.co/bRzqVz/ezgif_com_video_to_gif_1.gif" height="400" />

<img src="https://preview.ibb.co/bv6OiK/dialog_chat3.png" alt="dialog_chat3" height="400" border="0">

</div>

## :clapper: Usage

Ok, let's start with an installation - all you need to do is:

`npm install --save angular-ai-chat-bot`

Now when you have `angular-ai-chat-bot` installed, you are in a few steps from having tree in your application:

1. Add the `ChatBot` to your application's module `declarations` section:

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {ChatBot} from 'angular-ai-chat-bot';

@NgModule({
  declarations: [MyComponent, ChatBot],
  imports: [BrowserModule],
  bootstrap: [MyComponent]
})
export class MyModule {}
```

2. As soon as the previous step is done we need to give ChatBot an access token and message object - this can be accomplished by populating its `[token]` attribute with an 'Client access token' from Dialog Flow Agent and `[msg]` attribute with an RX Subject:

```typescript
// 1 - import required classes and interfaces
import { ChatBot } from 'angular-ai-chat-bot';
import { Subject } from 'rxjs';


@Component({
  selector: 'myComp',
  // 2 - set [token] attribute to ChatBot object
  template: `<Chat-bot class="chat-window"
                              [token]="accessToken"
                              [msg]="message"
                              >
               <ng-template>
               </ng-template>
             </Chat-bot>`
})
class MyComponent {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
}
```

Voila! That's pretty much it - enjoy :blush:

## :eyes: Demo

There is [demo built with Angular CLI](https://github.com/PoghosyanHayk/Angular-AI-Chat-Bot/tree/chat-bot/chat-bot/src/demo).

## :wrench: API

Here is the fully stuffed _Chat-Bot_ tag that you can use in your templates:

```html
    <Chat-bot class="chat-window"
                     [token]="accessToken"
                     [msg]="msg"
                     [msgTemplate]='message'
                     [inputTemplate]='input'>
      <ng-template #window>
      </ng-template>
    </Chat-bot>
```

Let's go through every element of this structure one by one.

### Chat-bot

`Chat-bot` is the selector for `Chat bot` which is bundled into `ChatBot`:

### [token]

`Chat-bot` has a `[token]` attribute which needs to connect to Google API:

### [msg]

`Chat-bot` has a `[msg]` attribute which should be RX Subject object

```typescript
// 1 - import required classes and interfaces
import { ChatBot } from 'angular-ai-chat-bot';
import { Subject } from 'rxjs';


@Component({
  selector: 'myComp',
  template: `<app-chat-window class="chat-window"
                              [token]="accessToken"
                              [msg]="message"
                              >
               <ng-template>
               </ng-template>
             </app-chat-window>`
})
class MyComponent {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
  
  private sendMessage(msgText: string):void {
      this.message.next(msgText);
  }
}
```

### [msgTemplate]

`Chat-bot` has a `[msgTemplate]` attribute which is a template for message

```html
    <Chat-bot class="chat-window"
                     [token]="accessToken"
                     [msg]="msg"
                     [msgTemplate]='message'
                     [inputTemplate]='input'>
      <ng-template #window>
      </ng-template>
    </Chat-bot>
    
    
    <ng-template #message let-text="text" let-object="object" let-sendBy="sendBy">
      <div>
        <span>{{sendBy}}</span>
        <span>{{text}}</span>
      </div>
    </ng-template>
```

Or you can import `chat-msg` component from `angular-ai-chat-bot` module and use it

```html
    <Chat-bot class="chat-window"
                     [token]="accessToken"
                     [msg]="msg"
                     [msgTemplate]='message'
                     [inputTemplate]='input'>
      <ng-template #window>
      </ng-template>
    </Chat-bot>
    
    
    <ng-template #message let-text="text" let-object="object" let-sendBy="sendBy">
      <chat-msg [msg]="{text: text,sendBy: sendBy}" ></chat-msg>
    </ng-template>
```

Add the `ChatMsg` to your application's module `declarations` section:

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {ChatBot} from 'angular-ai-chat-bot';
// Add the following component
import { ChatMsg } from 'angular-ai-chat-bot';
 

@NgModule({
  declarations: [MyComponent, ChatBot, ChatMsg],
  imports: [BrowserModule],
  bootstrap: [MyComponent]
})
export class MyModule {}
```


### [inputTemplate]

`Chat-bot` has a `[inputTemplate]` attribute which is a template for message input

```html
    <Chat-bot class="chat-window"
                     [token]="accessToken"
                     [msg]="msg"
                     [msgTemplate]='message'
                     [inputTemplate]='input'>
      <ng-template #window>
      </ng-template>
    </Chat-bot>
      
<ng-template #input>
  <input (change)="onChange($event.target);">
</ng-template>
```

```typescript
class MyComponent {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
  public onChange(message: string) {
      this.message.next(message);
  }
}
```

Or you can import `chat-input` component from `angular-ai-chat-bot` module and use it

```html
    <Chat-bot class="chat-window"
                     [token]="accessToken"
                     [msg]="msg"
                     [msgTemplate]='message'
                     [inputTemplate]='input'>
      <ng-template #window>
      </ng-template>
    </Chat-bot>
    
    
<ng-template #input>
  <chat-input (change)="onChange($event.target.value);"></chat-input>
</ng-template>
```

```typescript
class MyComponent {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
  public onChange(message: string) {
      this.message.next(message);
  }
}
```

Add the `ChatInput` to your application's module `declarations` section:

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {ChatBot} from 'angular-ai-chat-bot';
// Add the following component
import { ChatInput } from 'angular-ai-chat-bot';
 

@NgModule({
  declarations: [MyComponent, ChatBot, ChatInput],
  imports: [BrowserModule],
  bootstrap: [MyComponent]
})
export class MyModule {}
```


## :bulb: Want to help?

I am very appreciate for your ideas, proposals and found bugs which you can put in [github issues](https://github.com/PoghosyanHayk/Angular-AI-Chat-Bot/issues). Thanks in advance!

**P.S.** If you find it hard going through the documentation, please, let me know which parts of it was difficult to grasp and I will improve them.





