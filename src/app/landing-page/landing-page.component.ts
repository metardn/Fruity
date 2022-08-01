import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  images = [
    "assets/header/img1.jpg",
    "assets/header/img2.jpg",
    "assets/header/img3.jpg",
  ]

  cards = [
    {
      "title" : "Canadian Grapes",
      "sub" : "Organic fruits from local farms",
      "image" : "assets/content/img1.png",
      "user" : 24,
      "price" : "$ 6.99",
      "per" : "/ 500 gram"
    },
    {
      "title" : "Green Cabbage",
      "sub" : "Organic vegetables from local farms",
      "image" : "assets/content/img2.png",
      "user" : 14,
      "price" : "$ 2.99",
      "per" : "/ 500 gram"
    },
    {
      "title" : "Sweet Orange",
      "sub" : "Organic fruits from local farms",
      "image" : "assets/content/img3.png",
      "user" : 54,
      "price" : "$ 4.99",
      "per" : "/ 500 gram"
    },
    {
      "title" : "Fresh meats",
      "sub" : "Healthy and fresh",
      "image" : "assets/content/img4.png",
      "user" : 44,
      "price" : "$ 9.99",
      "per" : "/ 500 gram"
    },
    {
      "title" : "Red Apple",
      "sub" : "Healthy, organic and fresh",
      "image" : "assets/content/img5.png",
      "user" : 57,
      "price" : "$ 5.99",
      "per" : "/ 500 gram"
    },
    {
      "title" : "Fresh Carrots",
      "sub" : "Healthy and fresh",
      "image" : "assets/content/img6.png",
      "user" : 34,
      "price" : "$32.99",
      "per" : "/ 300 gram"
    },
  ]

  testimonials = [
    {
      "title" : "Fast Delivery",
      "desc" : "I always shopping at Fruity via mobile apps and they offer fast delivery service. It's works and free!",
      "name" : "Tyler Alcacea",
      "location" : "Toronto, CA",
      "bg" : "green",
      "img" : "assets/avatar/ava1.png"
    },
    {
      "title" : "Freshness",
      "desc" : "All fruits was fresh and organic. It's 100% from our local farmers",
      "name" : "Mike Sparkle",
      "location" : "Toronto, CA",
      "bg" : "purple",
      "img" : "assets/avatar/ava2.png"
    },
    {
      "title" : "Michele Larin",
      "desc" : "Really love the app when Fruity offers me a discount for new comer",
      "name" : "Tyler Alcacea",
      "location" : "Quebec, CA",
      "bg" : "blue",
      "img" : "assets/avatar/ava3.png"
    },

  ]

  newsletter_img = "assets/newsletter.png"

  fb_img = "assets/footer/fb.png"
  tw_img = "assets/footer/tw.png"
  yt_img = "assets/footer/yt.png"
  google_play_img = "assets/footer/gplay.png"
  app_store_img = "assets/footer/appstore.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
