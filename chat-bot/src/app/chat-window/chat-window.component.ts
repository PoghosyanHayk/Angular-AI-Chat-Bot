import {
  Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef,
  ViewChild
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {DataService, ESendBy, Message} from '../services/data.service';
import {scan} from 'rxjs/internal/operators';

@Component({
  selector: 'Chat-bot',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @Input() msgTemplate: TemplateRef<any>;
  @Input() inputTemplate: TemplateRef<any>;
  @Input() msg: Subject<any>;
  @Input() token: string;
  @Output() onMsgReceive = new EventEmitter();
  @ViewChild('msgArea') msgArea: ElementRef;
  @ViewChild('defaultMsgTemplate') defaultMsgTemplate: TemplateRef<any>;
  @ViewChild('defaultInputTemplate') defaultInputTemplate: TemplateRef<any>;

  allMessages: Observable<Message[]>;


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.msgTemplate = this.msgTemplate ? this.msgTemplate : this.defaultMsgTemplate;
    this.inputTemplate = this.inputTemplate ? this.inputTemplate : this.defaultInputTemplate;
    this.dataService.init(this.token);
    this.allMessages = this.dataService.conversation.asObservable()
      .pipe(
        scan((acc, val) => {
          setTimeout(() => {
           this.msgArea.nativeElement.scrollTop = this.msgArea.nativeElement.scrollHeight;
          });
          if (ESendBy.bot === val[0].sendBy) {
            this.onMsgReceive.emit(val[0].content);
          }
          return acc.concat(val);
        } )
      )
    this.msg.subscribe((msg) => {
      this.dataService.converse(msg);
    })

  }

  public onChange(target: any) {
    this.msg.next(target.value);
    target.value = '';
  }

}
