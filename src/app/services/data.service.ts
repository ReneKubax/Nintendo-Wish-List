// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private catalog: any[] = [
    { id: 1, title: 'Super Mario Odyssey', platform: 'Nintendo Switch', link: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5' },
    { id: 2, title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch', link:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58' },
    { id: 3, title: 'Xenoblade Chronicles 3', platform: 'Nintendo Switch', link: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_XenobladeChronicles3_image1600w.jpg' },
    { id: 4, title: 'Mario Strikers: Battle League', platform: 'Nintendo Switch', link: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/mario-strikers-battle-league-complete-guide-1.jpg' },
    { id: 5, title: 'LIVE A LIVE', platform: 'Nintendo Switch', link: 'https://media.vandal.net/m/7-2022/202272110185977_1.jpg' },
    { id: 6, title: 'Super Mario Odyssey', platform: 'Nintendo Switch', link: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5' },
    { id: 7, title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch', link:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58' },
    { id: 8, title: 'Xenoblade Chronicles 3', platform: 'Nintendo Switch', link: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_XenobladeChronicles3_image1600w.jpg' },
    { id: 9, title: 'Mario Strikers: Battle League', platform: 'Nintendo Switch', link: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/mario-strikers-battle-league-complete-guide-1.jpg' },
    { id: 10, title: 'LIVE A LIVE', platform: 'Nintendo Switch', link: 'https://media.vandal.net/m/7-2022/202272110185977_1.jpg' },
    { id: 11, title: 'Super Mario Odyssey', platform: 'Nintendo Switch', link: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5' },
    { id: 12, title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch', link:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58' },
    { id: 13, title: 'Xenoblade Chronicles 3', platform: 'Nintendo Switch', link: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_XenobladeChronicles3_image1600w.jpg' },
    { id: 14, title: 'Mario Strikers: Battle League', platform: 'Nintendo Switch', link: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/mario-strikers-battle-league-complete-guide-1.jpg' },
    { id: 15, title: 'LIVE A LIVE', platform: 'Nintendo Switch', link: 'https://media.vandal.net/m/7-2022/202272110185977_1.jpg' },
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
