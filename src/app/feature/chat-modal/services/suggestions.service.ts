import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestion } from '../model/suggestion';


@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
baseUrl:string = 'https://suggestion-api.onrender.com'
constructor(private http: HttpClient) { }

getSuggestions(): Observable<Suggestion[]>{
  return this.http.get<Suggestion[]>(`${this.baseUrl}/suggestions`)
}

getSuggestion(id: string): Observable<Suggestion[]>{
  return this.http.get<Suggestion[]>(`${this.baseUrl}/suggestions/${id}`)
}

}
