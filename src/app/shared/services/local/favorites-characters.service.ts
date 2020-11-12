
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCharactersService {

   private favoritesCharacters = [];

  constructor() { }

  addNewFavoriteCharacter(newFavoriteCharacter){
    this.favoritesCharacters.push(newFavoriteCharacter);
  }

  deleteFavoriteCharacter(i) {
    this.favoritesCharacters.splice(i, 1);
  }

  getFavoritesCharacter(){
    return this.favoritesCharacters;
  }
}
