import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { IconDeliveryComponent } from '../icons/icon-delivery.component';
import { IconFireComponent } from '../icons/icon-fire.component';
import { IconThumbsUpComponent } from '../icons/icon-thumbs-up.component';
import { IconStarComponent } from '../icons/icon-star.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    IconDeliveryComponent,
    IconFireComponent,
    IconThumbsUpComponent,
    IconStarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
