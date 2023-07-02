/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatHeaderComponent } from './chat-header.component';
import { User } from 'src/app/utils/models/user';
import { By } from '@angular/platform-browser';

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    user = { id:'1', name: 'John Doe', email: 'johndoe@example.com', avatar: 'https://i.pravatar.cc/150?img=1' };
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the customerSupport input correctly', () => {
    component.customerSupport = user;
    fixture.detectChanges();
    expect(component.customerSupport).toEqual(user);
  });

  it('should display customer support avatar', () => {
    component.customerSupport = user;
    fixture.detectChanges();
    const avatarElement = fixture.debugElement.query(By.css('[data-testid="user-avatar"]')).nativeElement;
    expect(avatarElement.getAttribute('src')).toEqual(user.avatar);
    expect(avatarElement.getAttribute('alt')).toEqual(user.name);
  });

  it('should display customer support name', () => {
    component.customerSupport = user;
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('[data-testid="user-name"]')).nativeElement;
    expect(nameElement.textContent).toEqual(user.name);
  })
});

