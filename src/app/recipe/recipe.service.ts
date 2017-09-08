import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburguer',
      'All can you eat',
      'http://healthyeatingforfamilies.com/wp-content/uploads/2015/05/hamburger-iStock_000008300965_Medium-1024x780.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),

    new Recipe(
      'Cheeseburguer',
      "Juast like McDonald's",
      'https://1.bp.blogspot.com/-i2e3XPfVwYw/V9GgRgn2Y3I/AAAAAAAAxeM/Ih2LoXrSQr0NBgFKLeupxYNzwGZXBv1VwCLcB/s1600/Hardees-Classic-Double-Cheeseburger.jpg',
        [
          new Ingredient('Bans', 2),
          new Ingredient('Meat', 1)
        ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}