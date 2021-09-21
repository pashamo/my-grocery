import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Southern Pimento Cheese',
      `Tangy, creamy, and with a hint of spice, you can't beat pimento cheese when it comes to classic Southern side dishes. Serve it with crackers for dipping, or smear on toast points for a fancier presentation. `,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F10%2F24%2Fsouthern-pimento-cheese-photo-by-holiday-baker-645301.jpg`,
      [
        new Ingredient(
          'shredded cheddar cheese(cups)',
          2
        ),
        new Ingredient(
          'cream cheese(ounces)',
          8
        ),
        new Ingredient(
          'mayonnaise(cups)',
          0.5
        )
      ]
    ),
    new Recipe(
      'Best-Ever Texas Caviar',
      `No fish are required for this beloved Texan dish. Black and pinto beans, along with corn, make up the base. Each bite is seasoned with peppers, cilantro, and a zippy sweet and sour dressing. This makes a great picnic dish in the South because there's no mayo to keep cool.`,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F27%2F5850362-2000.jpg`,
      [
        new Ingredient(
          'black beans can(15 ounce)',
          2
        ),
        new Ingredient(
          'pinto beans can(15 ounce)',
          2
        ),
        new Ingredient(
          'white corn can(15 ounce)',
          2
        )
      ]
    ),
    new Recipe(
      `Grandma's Chew Bread`,
      `A southern style bar cookie loaded with brown sugar and pecans. Relax in the afternoon and chew on some of these.`,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2508978.jpg`,
      [
        new Ingredient(
          'eggs',
          4
        ),
        new Ingredient(
          'all-purpose flour(cups)',
          2
        ),
        new Ingredient(
          'brown sugar(lbs)',
          1
        )
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.onAddIngredients(ingredients);
  }
}