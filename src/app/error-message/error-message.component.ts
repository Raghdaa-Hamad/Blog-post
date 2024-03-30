import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent {
  @Input() errorMessage: string = 'There is an error';
  @Output() retry = new EventEmitter<void>();
  constructor() {}
  onRetry() {
    this.retry.emit();
  }
}
