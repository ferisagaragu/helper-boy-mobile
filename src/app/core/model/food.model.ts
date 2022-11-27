export class FoodModel {

  uuid: string;
  name: string;
  has: boolean;
  amount: number;
  pantry: boolean;
  photo: string;
  createDate: Date;

  constructor(data: FoodModel | any) {
    Object.assign(this, data);
  }

}
