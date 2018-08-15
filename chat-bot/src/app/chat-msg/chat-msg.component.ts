import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.css'],
})
export class ChatMsgComponent implements OnInit {
  @Input() msg: object;
  public isVisible = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.isVisible = true}, 0)
  }



}
