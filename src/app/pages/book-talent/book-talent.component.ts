import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
// 0659595788 mpho

@Component({
  selector: 'app-book-talent',
  templateUrl: './book-talent.component.html',
  styleUrls: ['./book-talent.component.scss']
})
export class BookTalentComponent implements OnInit {

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
