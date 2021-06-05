import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router,private api: ApiGatewayService) { }
  sign_up = {
    name:'',
    surname:'',
    company_name:'',
    email:'',
    dob:'',
    gender:'',
    content_type:'',
    which_photography:'',
    which_photography1:'',
  }
  ngOnInit(){
  }
  nav(myNavigator=''){
    this.router.navigate([myNavigator]);
  }
  submit(){
    // await this.api.submitSignup
    try {
      let res = fetch('http://localhost:4200/api/sign_up.php', {
        method: 'POST',
        body: JSON.stringify(this.sign_up)
      }).then(response => response.json()).catch(err => {
        // this.alertProvider.presentAlert(this._generals.getGeneralError()["heading"], this._generals.getGeneralError()["mainMessage"]);
      })

      // return res;
    } catch (error) {
      console.log(error);
    }
  }

}
