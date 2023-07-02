import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/utils/models/user';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {
  @Input() customerSupport!: User
  constructor() { }

  ngOnInit() {
  }

}
