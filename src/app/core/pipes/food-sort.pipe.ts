import { Pipe, PipeTransform } from '@angular/core';
import { FoodModel } from '../model/food.model';

@Pipe({
  name: 'foodSort'
})
export class FoodSortPipe implements PipeTransform {

  transform(value: Array<FoodModel>, searchText: string): Array<FoodModel> {
    if (!searchText) return value;
    const data = value.filter(food => food.name.toLowerCase().includes(searchText.toLowerCase()));

    if (data.length === 0) return [
      new FoodModel({
        name: 'No se encontró ningún recurso',
        uuid: 'not_found'
      })
    ];

    return data;
  }

}
