import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'bluenovelty';
  imageObject = [{
      image: 'http://localhost:4200/assets/images/home2.jpg',
      thumbImage: 'http://localhost:4200/assets/images/photographer-selecting-photos-RZPRBXK.jpg',
      // title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'http://localhost:4200/assets/images/page4_img1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'http://localhost:4200/assets/images/professional-female.jpg'
      // title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'http://localhost:4200/assets/images/casourel3.jpg'
      // title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'http://localhost:4200/assets/images/photographer-selecting-photos-RZPRBXK.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'http://localhost:4200/assets/images/photographer-selecting-photos-RZPRBXK.jpg'
      // title: 'Example two with title.'
  }];
  check_login:Boolean = false;
  user_data : any;
  jwt : any;
  constructor(private router: Router) {}
  ngOnInit() {
    this.user_data = localStorage.getItem("user_data");
    this.jwt = localStorage.getItem("jwt");
    if(this.user_data){
      console.log(this.user_data);
      this.check_login = true;
    }else{
      this.check_login = false;
    }
    
  }
  nav(value:string){
    console.log(value);
    this.router.navigate([value]);
  }
  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_data");
    this.router.navigate(['']);
  }

}
