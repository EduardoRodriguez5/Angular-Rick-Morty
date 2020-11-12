import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CharacterSimplePageComponent } from './pages/character-simple-page/character-simple-page.component';
import { LocationsSimplePageComponent } from './pages/locations-simple-page/locations-simple-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CharacterDetailSimplePageComponent } from './pages/character-simple-page/pages/character-detail-simple-page/character-detail-simple-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AppComponent, CharacterSimplePageComponent, LocationsSimplePageComponent, FavoritesPageComponent, CharacterDetailSimplePageComponent,
    ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
