import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public slides = [
    [
      {
        name: "LookNight1",
        src: "../assets/carrousel/diapers/diaper1.jpeg",
        size: "P, XG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "LookBeach2",
        src: "../assets/carrousel/diapers/diaper2.jpeg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "LookFUN3",
        src: "../assets/carrousel/diapers/diaper3.jpeg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "JUMBO4",
        src: "../assets/carrousel/diapers/diaper4.jpg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      }
    ],
    [
      {
        name: "LookNight5",
        src: "../assets/carrousel/diapers/diaper4.jpg",
        size: "P, XG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "LookBeach6",
        src: "../assets/carrousel/diapers/diaper3.jpeg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "LookFUN7",
        src: "../assets/carrousel/diapers/diaper2.jpeg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      },
      {
        name: "JUMBO8",
        src: "../assets/carrousel/diapers/diaper1.jpeg",
        size: "P,M,XXG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. At in tellus integer feugiat scelerisque varius morbi. Cras adipiscing enim eu turpis egestas pretium. Duis ultricies lacus sed turpis."
      }
    ],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
