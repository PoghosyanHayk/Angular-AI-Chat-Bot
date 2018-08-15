import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {DataService, Message} from '../services/data.service';
import {scan} from 'rxjs/internal/operators';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @Input() msgTemplate: TemplateRef<any>;
  @Input() inputTemplate: TemplateRef<any>;
  @Input() msg: Subject<any>;
  @Input() token: string;
  @ViewChild('msgArea') msgArea: ElementRef;

  allMessages: Observable<Message[]>;


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.init(this.token);
    this.allMessages = this.dataService.conversation.asObservable()
      .pipe(
        scan((acc, val) => {
          setTimeout(() => {
           this.msgArea.nativeElement.scrollTop = this.msgArea.nativeElement.scrollHeight;
          })
          return acc.concat(val);
        } )
      )
    this.msg.subscribe((msg) => {
      this.dataService.converse(msg);
    })

  }

}
