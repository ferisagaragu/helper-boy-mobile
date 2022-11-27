import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ActivityComponent } from './activity/activity.component';
import { InputPhotoComponent } from './input-photo/input-photo.component';
import { FoodSortPipe } from '../core/pipes/food-sort.pipe';

@NgModule({
  declarations: [
    ActivityComponent,
    InputPhotoComponent,
    FoodSortPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

    FoodSortPipe,

    ActivityComponent,
    InputPhotoComponent
  ]
})
export class SharedModule { }
