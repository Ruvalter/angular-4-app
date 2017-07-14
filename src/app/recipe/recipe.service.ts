import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()

export class RecipeService {

  private recipesUrl = "http://localhost:3000/recipes";

  constructor(private http: Http) {};


  recipeSelected = new EventEmitter<Recipe>();




  getRecipes(): Promise<Recipe[]>  {
    return this.http.get(this.recipesUrl)
             .toPromise()
             .then(response => response.json().recipes as Recipe[])
             .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error("An error has ocurred!", error)
    return Promise.reject(error.message || error)

  }
}