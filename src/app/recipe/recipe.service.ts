import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another recipe', 'This is simply a test', 'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}