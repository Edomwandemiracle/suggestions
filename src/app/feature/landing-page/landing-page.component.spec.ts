/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display welcome message', () => {
    const welcomeMessage = fixture.nativeElement.querySelector('h1');
    expect(welcomeMessage.textContent).toContain('Welcome To ChatSug');
  });

  it('should show the header container when current route is "/"', () => {
    spyOn(component, 'isCurrentRoute').and.returnValue(true);
    fixture.detectChanges();

    const headerContainer = fixture.nativeElement.querySelector('.header-container');
    expect(headerContainer).toBeTruthy();
  });
});
