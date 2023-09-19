import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent {
  @Output() sortAscending: EventEmitter<void> = new EventEmitter<void>();
  @Output() sortDescending: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  sortAscendingClicked(): void {
    this.sortAscending.emit();
  }

  sortDescendingClicked(): void {
    this.sortDescending.emit();
  }
}
