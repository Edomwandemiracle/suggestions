import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/feature/chat-modal/model/message';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Input() messages: Message[] =[]
  @Input() isDisabled: boolean = false;
  @Output() select = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
  }
  selectTopic(message: Message) {
    this.select.emit(message)
  }
}
