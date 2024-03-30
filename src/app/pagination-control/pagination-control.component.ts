import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-control',
  templateUrl: './pagination-control.component.html',
  styleUrls: ['./pagination-control.component.css'],
})
export class PaginationControlComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  pagesArray: number[] = [];
  constructor() {}
  ngOnChanges() {
    this.generatePagesArray();
  }

  generatePagesArray() {
    this.pagesArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pagesArray.push(i);
    }
  }
  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  onPageNumberClick(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }
}
