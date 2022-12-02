import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FoodModel } from '../../../core/model/food.model';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss'],
})
export class ListFoodComponent {

  @Input() foods: Array<FoodModel>;
  @Input() load: boolean;
  @Input() search: string;

  @Output() refresh: EventEmitter<any>;
  @Output() update: EventEmitter<FoodModel>;
  @Output() delete: EventEmitter<any>;

  @ViewChild("ionList") ionList: ElementRef;

  constructor() {
    this.foods = null;
    this.load = false;
    this.refresh = new EventEmitter<any>();
    this.update = new EventEmitter<FoodModel>();
    this.delete = new EventEmitter<any>();
  }

  onRefresh(event: any): void {
    this.refresh.emit(event.target);
  }

  onUpdate(food: FoodModel): void {
    this.update.emit(food);
  }

  onDelete(food: FoodModel, index: number): void {
    this.delete.emit({ uuid: food.uuid, index });
  }

}
