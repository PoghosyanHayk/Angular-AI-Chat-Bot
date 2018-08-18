import { Injectable } from '@angular/core';

// Ai api Client
import { ApiAiClient } from '../client/ApiAiClient';

// RxJs modules
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: ESendBy) {}
}

export enum ESendBy {
  user = 'user',
  bot = 'bot'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private client;

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}


  public converse(msg: string) {
    const userMessage = new Message(msg, ESendBy.user);
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, ESendBy.bot);
        this.update(botMessage);
      });
  }

  public update(msg: Message) {
    this.conversation.next([msg]);
  }

  public init(token: string) {
    this.client = new ApiAiClient({ accessToken: token });
  }

}
