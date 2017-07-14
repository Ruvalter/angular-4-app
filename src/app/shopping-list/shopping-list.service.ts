import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredientsUrl = "http://localhost:3000/ingredients";

  constructor(private http: Http) {};


  getIngredients(): Promise<Ingredient[]>  {
    return this.http.get(this.ingredientsUrl)
             .toPromise()
             .then(response => response.json().ingredients as Ingredient[])
             .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error("An error has ocurred!", error)
    return Promise.reject(error.message || error)

  }



  // newIngredientAdded(ingredients: Ingredient) {
  //   this.ingredients.push(ingredients);
  //   this.ingredientsChanged.emit(this.ingredients.slice());
  // }

}