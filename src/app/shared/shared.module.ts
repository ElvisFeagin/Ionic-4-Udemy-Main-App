import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';

@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent],
  imports: [CommonModule],
  exports: [LocationPickerComponent, MapModalComponent],
  entryComponents: [MapModalComponent]
})
export class SharedModule {}
