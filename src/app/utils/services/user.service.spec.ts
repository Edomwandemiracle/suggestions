/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: User', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should create userService...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve user', () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    };

    service.getUser().subscribe((user: any) => {
      expect(user).toEqual(mockUser);
    });

    const request = httpMock.expectOne('https://suggestion-api.onrender.com/users/random');
    expect(request.request.method).toBe('GET');
    request.flush(mockUser);
  }
  );

});
