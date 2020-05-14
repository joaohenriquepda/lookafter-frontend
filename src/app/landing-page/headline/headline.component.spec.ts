import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineComponent } from './headline.component';

describe('HeadlineComponent', () => {
  let component: HeadlineComponent;
  let fixture: ComponentFixture<HeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeadlineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeadlineComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('Be welcome to our website, here you will find the best products for your need!');

  });

  it('should render subtitle', () => {
    const fixture = TestBed.createComponent(HeadlineComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#subtitle').textContent).toContain('We have the best quality for the best price.');

  });



});


