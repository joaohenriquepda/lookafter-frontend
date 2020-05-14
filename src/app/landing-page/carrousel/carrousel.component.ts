import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  // @Input() slides;

  slides: any;
  currentSlide = 0;
  currentSlideSmall = 0;
  subscription: any;
  resolution: any;
  slidesSmall: any;

  constructor(
    private comunicationService: ComunicationService

  ) {
    this.resolution = window.innerWidth

    this.comunicationService.getAllDiapers().subscribe(
      success => {
        this.slides = success;
        this.slidesSmall = this.slides;
        this.slides = [[success[0], success[1], success[2], success[3]], [success[4], success[5], success[6], success[7]]]
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.initCarrousel();
  }
  onPreviousClick() {

    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;

    const previousSmall = this.currentSlideSmall - 1;
    this.currentSlideSmall = previousSmall < 0 ? this.slidesSmall.length - 1 : previousSmall;

  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;

    const nextSmall = this.currentSlideSmall + 1;
    this.currentSlideSmall = nextSmall === this.slidesSmall.length ? 0 : nextSmall;

  }

  stopCarrousel() {
    this.subscription.unsubscribe();
  }

  initCarrousel() {
    //emit value in sequence every 2 second
    const source = interval(2000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.onNextClick());
  }


}
