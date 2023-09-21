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

  sortOrderChanged(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;

    if (selectedOption === 'asc') {
     this.sortAscendingClicked();
    } else if (selectedOption === 'desc') {
      this.sortDescendingClicked();
    }
  }


  sortAscendingClicked(): void {
    this.sortAscending.emit();
  }

  sortDescendingClicked(): void {
    this.sortDescending.emit();
  }

}
