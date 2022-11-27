import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {

  @Input() subPage: boolean;
  @Input() title: string;
  @Input() modal: boolean;
  @Input() cancelBtn: string;
  @Input() confirmBtn: string;
  @Input() search: boolean;

  @Output() cancel: EventEmitter<void>;
  @Output() confirm: EventEmitter<void>;
  @Output() searchKeyUp: EventEmitter<string>;

  showSearchInput: boolean;

  constructor() {
    this.cancel = new EventEmitter<void>();
    this.confirm = new EventEmitter<void>();
    this.searchKeyUp = new EventEmitter<string>();
  }

  onSearchChange(event: any): void {
    this.searchKeyUp.emit(event?.target?.value);
  }

  onCloseSearch(): void {
    const searchbar = document.getElementById('searchbar');
    searchbar.classList.add('animate__slideOutUp');
    setTimeout(() => this.showSearchInput = false, 200);
    this.searchKeyUp.emit(null);
  }

}
