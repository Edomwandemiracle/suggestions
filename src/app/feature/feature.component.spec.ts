/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeatureComponent } from './feature.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
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

  it('should navigate to /chat on link click', () => {
    const link = fixture.nativeElement.querySelector('a');
    link.click();

    fixture.detectChanges();

    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('should show the header container when current route is "/"', () => {
    spyOn(component, 'isCurrentRoute').and.returnValue(true);
    fixture.detectChanges();

    const headerContainer = fixture.nativeElement.querySelector('.header-container');
    expect(headerContainer).toBeTruthy();
  });
});
