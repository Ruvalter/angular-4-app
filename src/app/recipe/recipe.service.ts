import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),

    new Recipe(
      'Another recipe',
      'This is simply a test',
      'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Bans', 2),
          new Ingredient('Meat', 1)
        ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}