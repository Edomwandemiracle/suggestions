
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utils/services/user.service';
import { map } from 'rxjs';
import { User } from '../../utils/models/user';
import { Suggestion } from './model/suggestion';
import { Message } from './model/message';
import { SuggestionsService } from './services/suggestions.service';



@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
  messages: Message[] =[]
  isEmpty: boolean = false;
  customerSupport!:User;
  isLoading: boolean = true;

  constructor(private userService: UserService, private suggestionService: SuggestionsService ) { }
  ngOnInit(): void {
    this.getCustomerSupport()
    this.getSuggestions()
  }


  getCustomerSupport() {
    this.userService.getUser().subscribe((user:User) =>{
      this.customerSupport = user
    })
    
  }

  getSuggestions(){
    this.isLoading = true
    this.suggestionService.getSuggestions().pipe(
      map((suggestions: Suggestion[]) => {
        return suggestions.map((suggestion: Suggestion) => {
          return {
            ...suggestion,
            author: 'bot',
            id: suggestion.id,
            title: suggestion.title,
            parentId: suggestion.parentId
          }
        })
      }
      )
    ).subscribe((message: Message[]) => {
      this.isLoading = false
      this.messages = message;
      
    })
  }

  
  selectTopic(message: Message) {
    this.isLoading = true
    this.setUserMessage(message)
    this.suggestionService.getSuggestion(message.id)
    .pipe(
      map((suggestions: Suggestion[]) => {
        return suggestions.map((suggestion: Suggestion) => {
          return {
            ...suggestion,
            author: 'bot',
            id: suggestion.id,
            title: suggestion.title,
            parentId: suggestion.parentId
          }
        })
      }
      )
    ).subscribe((message: Message[]) => {
      if(message.length === 0) this.isEmpty = true
      this.isLoading = false
      this.messages = [...this.messages, ...message];
    })
  }
  
  
  resetChat(){
    this.messages = []
    this.isEmpty = false
    this.getSuggestions()
  }

  setUserMessage(message: Message){
    this.messages.push({author: 'user', id: message.id,
    title: message.title,
    parentId: message.parentId})
  }
}
