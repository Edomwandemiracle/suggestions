/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuggestionsService } from './suggestions.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Suggestion } from '../model/suggestion';

describe('Service: Suggestions', () => {
  let service: SuggestionsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SuggestionsService]
    });
    service = TestBed.inject(SuggestionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create suggestion service...', inject([SuggestionsService], (service: SuggestionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve suggestions', () => {
    const mockSuggestions: Suggestion[] = [
      { id: '1', title: 'Suggestion 1', parentId: '' },
      { id: '2', title: 'Suggestion 2', parentId: '' },
    ];

    service.getSuggestions().subscribe((suggestions: Suggestion[]) => {
      expect(suggestions).toEqual(mockSuggestions);
    });

    const request = httpMock.expectOne('https://suggestion-api.onrender.com/suggestions');
    expect(request.request.method).toBe('GET');
    request.flush(mockSuggestions);
  });

  it('should retrieve a suggestion by ID', () => {
    const mockSuggestion: Suggestion[] = [{ id: '1', title: 'Suggestion 1', parentId: '1' }];
    const id = '1';

    service.getSuggestion(id).subscribe((suggestion: Suggestion[]) => {
      expect(suggestion).toEqual(mockSuggestion);
    });

    const request = httpMock.expectOne(`https://suggestion-api.onrender.com/suggestions/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockSuggestion);
  });
});
