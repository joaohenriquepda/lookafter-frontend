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
  subscription: any;

  constructor() {
    this.initCarrousel();
  }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
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
