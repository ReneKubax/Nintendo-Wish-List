import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './atoms/game-card/game-card.component';
import { GameListContainerComponent } from './molecules/game-list-container/game-list-container.component';
import { GameCatalogComponent } from './organisms/game-catalog/game-catalog.component';
import { SortButtonComponent } from './atoms/sort-button/sort-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameFooderComponent } from './atoms/game-fooder/game-fooder.component';
import { GameNavbarComponent } from './atoms/game-navbar/game-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListContainerComponent,
    GameCatalogComponent,
    SortButtonComponent,
    GameFooderComponent,
    GameNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
