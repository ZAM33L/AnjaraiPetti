import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://tasty.p.rapidapi.com/recipes/list';
  private recipeDetailsUrl = 'https://tasty.p.rapidapi.com/recipes/get-more-info';
  private apiKey = 'a723afd64bmshd43d8871e49270dp168ecajsnbfd49260e5b0'; // Replace with your RapidAPI Key
  private apiHost = 'tasty.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    });

    return this.http.get(this.apiUrl, {
      headers,
      params: { q: query, from: '0', size: '20' },
    });
  }

  getRecipeDetails(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    });

    return this.http.get(this.recipeDetailsUrl, {
      headers,
      params: { id },
    });
  }
}

