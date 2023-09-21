import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-container',
  templateUrl: './game-list-container.component.html',
  styleUrls: ['./game-list-container.component.scss']
})
export class GameListContainerComponent {
  @Input() games: any[] = [

  ];
}

