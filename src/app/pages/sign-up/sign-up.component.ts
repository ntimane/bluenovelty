import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router,private _api: ApiGatewayService) { }
  checkPassword:Boolean = false;
  password:string ='';
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
    profile_img: File,
    user_type:'',
    password:'',
  }
  ngOnInit(){
  }
  nav(myNavigator=''){
    this.router.navigate([myNavigator]);
  }
  checkPasswordMatch(){    
    if (this.sign_up.password != this.password) {
      this.checkPassword = false;
    }else{
      this.checkPassword = true;
    }
  }
  clear(){
    this.sign_up.name='';
    this.sign_up.surname='';
    this.sign_up.company_name='';
    this.sign_up.email='';
    this.sign_up.dob='';
    this.sign_up.gender='';
    this.sign_up.content_type='';
    this.sign_up.which_photography='';
    this.sign_up.which_photography1='';
    // this.sign_up.profile_img=null;
    this.sign_up.user_type='';
    this.sign_up.password='';
    this.password='';
  }
  onFileSelect(event:any) {
    this.sign_up.profile_img= event.target.files;
    // this.type = this.params.fileToUpload.name.split('.').pop();
    // if (this.type === "jpeg" || this.type === "jpg" || this.type === "pdf") {
    //   this.invalidFile = false;
    // }else{
    //   this.invalidFile = true;
    // }
    // if(this.invalidFile){
    //   alert("Please make sure you have uploaded a .jpeg or .jpg or pdf file");
    //   this.params.fileToUpload =null;
    // }
    // console.log(this.invalidFile+" : "+this.type);
  }

  submit(){
    this._api.login(this.sign_up).then(res => {
      console.log(res);
      if(res.Status){
        alert(res.Message);
        localStorage.setItem("jwt",res.jwt);
        localStorage.setItem("user_data",res.Data);
        if(res.Data.user_type == "Photographer"){
          this.router.navigate(['']);
        }else{
          this.router.navigate(['profile']);
        }
      }else{
        alert(res.Message);
      }
    }).catch(err=>{
      alert('Could not process your request now, try again: '+err);
    })
  }

}
