import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'bluenovelty';
  adGallery:any;
  imageObject = [{
      image: 'src="/assets/images/home2.jpg"',
      thumbImage: '/asset/casourel1.jpg',
      // title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      // thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      // title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      // title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      // title: 'Example two with title.'
  }];

  constructor(private router: Router) {}
  ngOnInit() {
    //get advert gallery
    this.adGallery = [{name:'img1',src:'source'},{name:'img1',src:'source'}];
    (<any>$(document)).ready(function(){
      (<any>$('#camera_wrap')).camera({
        loader: false,
        pagination: false ,
        minHeight: '200',
        thumbnails: false,
        height: '39,0625%',
        caption: true,
        navigation: true,
        fx: 'mosaic'
      });
      var owl = $("#owl");
      (<any>owl).owlCarousel({
        items : 7, //10 items above 1000px browser width
        itemsDesktop : [995,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [767, 3], // betweem 900px and 601px
        itemsTablet: [700, 3], //2 items between 600 and 0
        itemsMobile : [479, 2], // itemsMobile disabled - inherit from itemsTablet option
        navigation : true,
      });
      (<any>$()).UItoTop({ easingType: 'easeOutQuart' });
      (<any>$('#stuck_container')).tmStickUp({});
      (<any>$('.gallery a.gal_item')).touchTouch();
    });
  }
  nav(value:string){
    console.log(value);
    this.router.navigate([value]);
  }

}
