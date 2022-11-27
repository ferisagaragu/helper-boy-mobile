import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { FoodModel } from '../model/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  findAllFoodsBy(type: string = '', uuid: string = ''): Observable<Array<FoodModel>> {
    return this.http.get(
      `${environment.serverLink}/foods/${uuid}?type=${type}`
    ).pipe(map((resp : any) => resp.data.map(data => new FoodModel(data))));
  }

  calculateAmount(): Observable<number> {
    return this.http.get(
      `${environment.serverLink}/foods/calculate-amount`
    ).pipe(map((resp: any) => resp.data));
  }

  createFood(food: FoodModel): Observable<FoodModel> {
    return this.http.post(
      `${environment.serverLink}/foods`,
      food
    ).pipe(map((resp: any) => new FoodModel(resp.data)));
  }

  updateFood(food: FoodModel): Observable<FoodModel> {
    return this.http.put(
      `${environment.serverLink}/foods`,
      food
    ).pipe(map((resp: any) => new FoodModel(resp.data)));
  }

  deleteFood(uuid: string): Observable<string> {
    return this.http.delete(
      `${environment.serverLink}/foods/${uuid}`
    ).pipe(map((resp: any) => resp.data));
  }

}
