import { Routes } from '@angular/router';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

export const routes: Routes = [
  { path: '', component: RecipeSearchComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
];
