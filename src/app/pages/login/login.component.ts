import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    username: '',
    password: ''
  }
  constructor(private router: Router,private _api: ApiGatewayService) { }

  ngOnInit(): void {
  }
  nav(myNavigator=''){
    this.router.navigate([myNavigator]);
  }
  submit(){
    this._api.login(this.login).then(res => {
      console.log(res);
      if(res.Status){
        alert(res.Message);
        localStorage.setItem("jwt",res.jwt);
        localStorage.setItem("user_data",res.Data);
        if(res.Data.user_type == "Photographer"){
          this.router.navigate(['profile']);
        }else{
          this.router.navigate(['']);
        }
      }
      else{
        alert(res.Message);
      }
    }).catch(err=>{
      alert('Could not process your request now, try again:'+err);
    })
  }
  clear(){
    this.login.username = '';
    this.login.password = ''
  }

}
