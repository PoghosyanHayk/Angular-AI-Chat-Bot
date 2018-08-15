import { Component } from '@angular/core';
import {Observable, Subject, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public msg: Subject<any> = new Subject();
  public msgArray: Observable<Array<any>> = new Observable<Array<any>>();

  constructor() {
  }

  public onChange(target: any) {
    this.msg.next(target.value);
    target.value = '';
  }
}
