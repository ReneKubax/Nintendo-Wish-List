import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './atoms/game-card/game-card.component';
import { GameListContainerComponent } from './molecules/game-list-container/game-list-container.component';
import { GameCatalogComponent } from './organisms/game-catalog/game-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListContainerComponent,
    GameCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
