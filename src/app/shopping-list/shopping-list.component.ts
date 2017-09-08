import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  // @Input() newIngredient: Ingredient;
  // @Input() ingredientSent: Ingredient;
  ingredients: Ingredient[];


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredient: Ingredient[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  onEditItem( index: Number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
