import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-thumbs-up',
  template: `<svg width="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 50H10C11.375 50 12.5 48.875 12.5 47.5V25C12.5 23.625 11.375 22.5 10 22.5H5V50ZM54.575 32.2C54.85 31.575 55 30.9 55 30.2V27.5C55 24.75 52.75 22.5 50 22.5H36.25L38.55 10.875C38.675 10.325 38.6 9.725 38.35 9.225C37.7815 8.09903 37.0391 7.06973 36.15 6.175L35 5L18.975 21.025C18.025 21.975 17.5 23.25 17.5 24.575V44.175C17.5066 45.7222 18.1259 47.2037 19.2222 48.2954C20.3186 49.3871 21.8028 50 23.35 50H43.625C45.375 50 47.025 49.075 47.925 47.575L54.575 32.2Z" fill="currentColor"/>
  </svg>`,
})
export class IconThumbsUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
