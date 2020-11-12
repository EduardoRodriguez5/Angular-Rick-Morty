import { Component, OnInit } from '@angular/core';
import { FavoritesCharactersService } from 'src/app/shared/services/local/favorites-characters.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favcharacters;

  constructor(private favoritesCharactersService: FavoritesCharactersService) { }

  ngOnInit(): void {

    this.favcharacters = this.favoritesCharactersService.getFavoritesCharacter();

  }

}
