import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../core/http/food.service';
import { FoodModel } from '../../../core/model/food.model';
import { AlertService } from '../../../core/service/alert.service';
import { ModalService } from '../../../core/service/modal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormFoodComponent } from '../form-food/form-food.component';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.scss'],
})
export class ViewMarketComponent implements OnInit {

  foods: Array<FoodModel>;
  foodSearch: string;
  loadFoods: boolean;
  amount: number;
  loadAmount: boolean;

  constructor(
    private foodService: FoodService,
    private alertService: AlertService,
    private modalService: ModalService,
    private snackBar: MatSnackBar
  ) {
    this.foods = null;
    this.loadFoods = false;
  }

  ngOnInit() {
    this.findAllFoods();
    this.calculateAmount();
  }

  onAddFood(): void {
    this.modalService.open(
      FormFoodComponent,
      food => this.addFood(food)
    );
  }

  onUpdateFood(event: FoodModel): void {
    this.modalService.open(
      FormFoodComponent,
      food => this.updateFood(food),
      { food: event }
    )

  }

  onDeleteFood({ uuid, index }): void {
    this.alertService.confirm(
      '¿Quieres elimar el recurso?',
      'Recuerda que una vez eliminado no podrás recuperarlo',
      _ => this.deleteFood(uuid, index)
    );
  }

  findAllFoods(refreshEvent?: any): void {
    this.loadFoods = true;
    this.foodService.findAllFoodsBy('market').subscribe({
      next: resp => {
        this.foods = resp;
        this.loadFoods = false;
        if(refreshEvent) refreshEvent.complete();
      },
      error: _ => {
        //todo put the alert for error message
        this.loadFoods = false;
        if(refreshEvent) refreshEvent.complete();
      }
    });
  }

  private calculateAmount(): void {
    this.loadAmount = true;
    this.foodService.calculateAmount().subscribe({
      next: resp => {
        this.amount = resp;
        this.loadAmount = false;
      },
      error: _ => {
        //todo put the alert for error message
        this.loadAmount = false;
      }
    });
  }

  private addFood(food: FoodModel): void {
    this.foodService.createFood(food).subscribe({
      next: resp => {
        this.foods.push(resp);
        setTimeout(_ => {
          document.getElementById(resp.uuid).scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          this.calculateAmount();
        }, 100);
      },
      error: _ => { /*todo generate error inform*/ }
    });
  }

  private updateFood(food: FoodModel): void {
    this.foodService.updateFood(food).subscribe({
      next: resp => {
        this.foods[
          this.foods.findIndex((resp) => resp.uuid === food.uuid)
        ] = resp;
        this.calculateAmount();
        if (this.foodSearch) this.findAllFoods();
      },
      error: _ => { /*todo generate error inform*/ }
    });
  }

  private deleteFood(uuid: string, index: number): void {
    this.foodService.deleteFood(uuid).subscribe({
      next: resp => {
        this.foods.splice(index, 1);
        this.snackBar.open(resp, null, { duration: 3000 });
        this.calculateAmount();
        if (this.foodSearch) this.findAllFoods();
      },
      error: _ => { /*todo generate error inform*/ }
    });
  }

}
