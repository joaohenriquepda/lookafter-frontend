import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input() slides;
  currentSlide = 0;
  currentSlideSmall = 0;
  subscription: any;
  resolution: any;
  slidesSmall: any;

  constructor() {
    this.initCarrousel();
    this.resolution = window.innerWidth
  }

  ngOnInit(): void {
    this.calcSlides();
  }

  calcSlides() {
    console.log(this.slides[0]);

    this.slidesSmall = [...this.slides[0], ...this.slides[1]]
    console.log(this.slidesSmall);

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
