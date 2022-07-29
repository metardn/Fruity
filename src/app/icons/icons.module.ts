import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDeliveryComponent } from './icon-delivery.component';
import { IconFireComponent } from './icon-fire.component';
import { IconThumbsUpComponent } from './icon-thumbs-up.component';



@NgModule({
  declarations: [
    IconDeliveryComponent,
    IconFireComponent,
    IconThumbsUpComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
