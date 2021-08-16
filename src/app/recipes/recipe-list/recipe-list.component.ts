import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Southern Pimento Cheese',
      `Tangy, creamy, and with a hint of spice, you can't beat pimento cheese when it comes to classic Southern side dishes. Serve it with crackers for dipping, or smear on toast points for a fancier presentation. `,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2016%2F10%2F24%2Fsouthern-pimento-cheese-photo-by-holiday-baker-645301.jpg`
    ),
    new Recipe(
      'Best-Ever Texas Caviar',
      `No fish are required for this beloved Texan dish. Black and pinto beans, along with corn, make up the base. Each bite is seasoned with peppers, cilantro, and a zippy sweet and sour dressing. This makes a great picnic dish in the South because there's no mayo to keep cool.`,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F27%2F5850362-2000.jpg`
    ),
    new Recipe(
      `Grandma's Chew Bread`,
      `A southern style bar cookie loaded with brown sugar and pecans. Relax in the afternoon and chew on some of these.`,
      `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2508978.jpg`
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(data: Recipe) {
    this.selectedRecipe.emit(data);
  }
}
