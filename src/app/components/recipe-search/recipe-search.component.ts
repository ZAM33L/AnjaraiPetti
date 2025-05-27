import { Component , OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { RouterModule } from '@angular/router'; // ✅ Required for routerLink
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, RouterModule], // ✅ Import required modules
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent implements OnInit {
  query: string = '';
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // Load search results from localStorage when component initializes
    const storedQuery = localStorage.getItem('recipeQuery');
    const storedResults = localStorage.getItem('recipeResults');

    if (storedQuery && storedResults) {
      this.query = storedQuery;
      this.recipes = JSON.parse(storedResults);
    }
  }

  search() {
    if (this.query.trim() !== '') {
      this.recipeService.searchRecipes(this.query).subscribe((data) => {
        this.recipes = data.results || [];

        // Save search query and results in localStorage
        localStorage.setItem('recipeQuery', this.query);
        localStorage.setItem('recipeResults', JSON.stringify(this.recipes));
      });
    }
  }

  clearSearch() {
    this.query = ''; 
    this.recipes = []; 
    localStorage.removeItem('recipeQuery'); 
    localStorage.removeItem('recipeResults');
  }
  
}
