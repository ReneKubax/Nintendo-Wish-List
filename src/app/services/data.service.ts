// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private catalog: any[] = [
    { id: 1, title: 'Super Mario Odyssey', platform: 'Nintendo Switch' },
    { id: 2, title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch' },
    { id: 3, title: 'Xenoblade Chronicles 3', platform: 'Nintendo Switch' },
    { id: 4, title: 'Mario Strikers: Battle League', platform: 'Nintendo Switch' },
    { id: 5, title: 'LIVE A LIVE', platform: 'Nintendo Switch' },
  ];

  private wishlist: any[] = [];

  private catalogSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.catalog);
  private wishlistSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.wishlist);

  constructor() {}

  getCatalog(): Observable<any[]> {
    return this.catalogSubject.asObservable();
  }

  getWishlist(): Observable<any[]> {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(game: any): void {
    this.wishlist.push(game);
    this.wishlistSubject.next([...this.wishlist]);
  }

  removeFromWishlist(game: any): void {
    this.wishlist = this.wishlist.filter((g) => g.id !== game.id);
    this.wishlistSubject.next([...this.wishlist]);
  }
}
