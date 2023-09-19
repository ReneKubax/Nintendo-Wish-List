import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-container',
  templateUrl: './game-list-container.component.html',
  styleUrls: ['./game-list-container.component.scss']
})
export class GameListContainerComponent {
  @Input() games: any[] = [
    { title: 'Juego 1', description: 'Descripción del juego 1' },
    { title: 'Juego 2', description: 'Descripción del juego 2' },
    // Agrega más juegos según sea necesario
  ];
}

