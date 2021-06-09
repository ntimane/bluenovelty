import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nav(myNavigator=''){
    this.router.navigate([myNavigator]);
  }
  submit(){

  }
  clear(){
    
  }

}
