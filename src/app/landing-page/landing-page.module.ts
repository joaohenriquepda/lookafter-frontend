import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarrouselComponent } from './carrousel/carrousel.component'
import { CardComponent } from './carrousel/card/card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeadlineComponent } from './headline/headline.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    CarrouselComponent,
    CardComponent,
    HeadlineComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule,
    NgbModule,
    LandingPageRoutingModule
  ],
  exports: [NgbModule]
})
export class LandingPageModule { }
