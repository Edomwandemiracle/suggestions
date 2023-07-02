/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChatListComponent } from './chat-list.component';
import { Message } from '../../model/message';

describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty messages array', () => {
    expect(component.messages).toEqual([]);
  });

  it('should initialize isDisabled as false', () => {
    expect(component.isDisabled).toBe(false);
  });

  it('should render messages correctly', () => {
    const messages: Message[] = [
      { id: '1', title: 'Suggestion 1', parentId: '1', author: 'bot' },
      { id: '2', title: 'Suggestion 2', parentId: '1', author: 'user' }
    ];
    component.messages = messages;
    fixture.detectChanges();

    const messageElements = fixture.debugElement.queryAll(By.css('[data-testid="message-box"]'));
    expect(messageElements.length).toBe(2);

    expect(messageElements[0].nativeElement.textContent).toContain('Suggestion 1');
    expect(messageElements[0].nativeElement.classList).toContain('from');

    expect(messageElements[1].nativeElement.textContent).toContain('Suggestion 2');
    expect(messageElements[1].nativeElement.classList).toContain('to');
  });

  it('should emit select event when a message is clicked', () => {
    const message: Message = { id: '1', title: 'Suggestion 1', parentId: '1', author: 'bot' };
    component.messages = [message];
    fixture.detectChanges();

    spyOn(component.select, 'emit');
    const messageElement = fixture.debugElement.query(By.css('[data-testid="message-box"]'));

    messageElement.triggerEventHandler('click', null);
    expect(component.select.emit).toHaveBeenCalledWith(message);
  });

  it('should render the "Thank you" message when isDisabled is true', () => {
    component.isDisabled = true;
    fixture.detectChanges();

    const thankYouElement = fixture.debugElement.query(By.css('[data-testid="thanks-you"]'));
    expect(thankYouElement.nativeElement.textContent).toContain('Thank you');
  });
});
