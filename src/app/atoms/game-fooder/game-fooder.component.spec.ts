import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFooderComponent } from './game-fooder.component';

describe('GameFooderComponent', () => {
  let component: GameFooderComponent;
  let fixture: ComponentFixture<GameFooderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFooderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFooderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
