// game-card.component.ts
import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: any;

  constructor(private dataService: DataService) { }

  addToWishlist(): void {
    this.dataService.addToWishlist(this.game);
  }
}
