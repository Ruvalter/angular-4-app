import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() newIngredient: Ingredient;
  ingredients: Ingredient[];


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.getIngredients()
      .then(_ingredients => this.ingredients = _ingredients);

    // this.shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (ingredient: Ingredient[]) => {
    //       this.ingredients = ingredient;
    //     }
    //   );

  }

}
