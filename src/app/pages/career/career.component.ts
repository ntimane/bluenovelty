import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

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
