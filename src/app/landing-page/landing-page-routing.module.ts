import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page/landing-page.component';
import { CardComponent } from './carrousel/card/card.component'
import { CarrouselComponent } from './carrousel/carrousel.component'
import { HeadlineComponent  } from "./headline/headline.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
