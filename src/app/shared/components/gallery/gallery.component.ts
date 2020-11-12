import { FavoritesCharactersService } from './../../services/local/favorites-characters.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersService } from '../../services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() characters ;

  constructor(private favoritesCharactersService: FavoritesCharactersService, public router: Router) { }

  ngOnInit(): void {


  }
  favoriteCharacter(character) {
    this.favoritesCharactersService.addNewFavoriteCharacter(character);
  }
  deletefavoriteCharacter(character) {
    this.favoritesCharactersService.deleteFavoriteCharacter(character);
  }
}
