import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router // Inject Router for navigation
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeDetails(id).subscribe((data) => {
        this.recipe = data;
      });
    }
  }

  // Go back to the previous page
  goBack() {
    this.router.navigate(['/']); // Navigates back to the Recipe Search page
  }
}
