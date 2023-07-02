/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModalComponent } from './chat-modal.component';
import { SuggestionsService } from './services/suggestions.service';
import { UserService } from 'src/app/utils/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { User } from 'src/app/utils/models/user';
import { Message } from './model/message';
import { Suggestion } from './model/suggestion';
import { By } from '@angular/platform-browser';


describe('ChatModalComponent', () => {
  let component: ChatModalComponent;
  let fixture: ComponentFixture<ChatModalComponent>;
  let userService: UserService;
  let suggestionService: SuggestionsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatModalComponent ],
      providers: [UserService, SuggestionsService],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
    suggestionService = TestBed.inject(SuggestionsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    spyOn(component, 'getCustomerSupport');
    spyOn(component, 'getSuggestions');
    
    component.ngOnInit();

    expect(component.isEmpty).toBeFalsy();
    expect(component.isLoading).toBeTrue();
    expect(component.messages).toEqual([]);
    expect(component.getCustomerSupport).toHaveBeenCalled();
    expect(component.getSuggestions).toHaveBeenCalled();
  });

  it('should get customer support', () => {
    const user: User = { id: '1', name: 'John Doe', email:'john@gmail.com', avatar: 'https://i.pravatar.cc/150?img=1' };
    spyOn(userService, 'getUser').and.returnValue(of(user));

    component.getCustomerSupport();

    expect(component.customerSupport).toEqual(user);
  });

  it('should select topic and get suggestions', () => {
    const message: Message = { id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' };
    const suggestions: Suggestion[] = [ { id: '1', title: 'Suggestion 1', parentId: '' } , { id: '2', title: 'Suggestion 2', parentId: '' } ];
    spyOn(suggestionService, 'getSuggestion').and.returnValue(of(suggestions));

    component.selectTopic(message);

    expect(component.isLoading).toBeFalse();
    expect(component.isEmpty).toBeFalse();
    expect(component.messages).toEqual([{ id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' }, { id: '1', title: 'Suggestion 1', parentId: '', author: 'bot'}, { id: '2', title: 'Suggestion 2', parentId: '', author: 'bot' }]);
  });

  it('should select topic and set isEmpty to true when no suggestions found', () => {
    const message: Message = { id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' };
    spyOn(suggestionService, 'getSuggestion').and.returnValue(of([]));

    component.selectTopic(message);

    expect(component.isLoading).toBeFalse();
    expect(component.isEmpty).toBeTrue();
    expect(component.messages).toEqual([{ id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' }]);
  });

  it('should reset chat', () => {
    spyOn(component, 'getSuggestions');

    component.resetChat();

    expect(component.messages).toEqual([]);
    expect(component.isEmpty).toBeFalse();
    expect(component.getSuggestions).toHaveBeenCalled();
  });

  it('should set user message', () => {
    const message: Message = { id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' };

    component.setUserMessage(message);

    expect(component.messages).toEqual([ { id: '1', title: 'Suggestion 1', parentId: '1', author: 'user' } ]);
  });

});
