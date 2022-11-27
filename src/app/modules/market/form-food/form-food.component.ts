import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodModel } from '../../../core/model/food.model';

@Component({
  selector: 'app-form-food',
  templateUrl: './form-food.component.html',
  styleUrls: ['./form-food.component.scss'],
})
export class FormFoodComponent implements OnInit {

  @Input() food: FoodModel;

  form: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void {
    if(this.form.invalid) return;
    this.modalCtrl.dismiss(new FoodModel({
      ...this.food,
      ...this.form.value
    }));
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      photo: [null],
      name: [null, Validators.required],
      amount: [null, Validators.required]
    });

    if (this.food) this.form.reset(this.food);
  }

}
