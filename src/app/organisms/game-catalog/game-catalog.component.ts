// game-catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-game-catalog',
  templateUrl: './game-catalog.component.html',
  styleUrls: ['./game-catalog.component.scss']
})
export class GameCatalogComponent implements OnInit {
  games: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCatalog().subscribe((catalog) => {
      this.games = catalog;
    });
  }

  sortGames(order: string) {
    // Lógica de ordenamiento aquí
  }
}
