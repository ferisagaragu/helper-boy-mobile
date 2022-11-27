import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-photo',
  templateUrl: './input-photo.component.html',
  styleUrls: ['./input-photo.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputPhotoComponent
    }
  ]
})
export class InputPhotoComponent implements ControlValueAccessor {

  image: string;
  loadImage: boolean;
  touched: boolean;
  disable: boolean;
  onChange: Function;
  onTouched: Function;

  constructor(private camera: Camera) { }

  openCamera(): void {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.markAsTouched();
      this.onChange(this.image);
    });
  }

  writeValue(image: string): void {
    this.image = image;
  }

  registerOnChange(onChange: any): void  {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void  {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void  {
    this.disable = disabled;
  }

  private markAsTouched(): void  {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

}
