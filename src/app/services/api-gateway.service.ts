import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor() { }
  async login(payLoad:any): Promise<any> {
    if(payLoad.username){
      const formData: FormData = new FormData();
      formData.append('username',payLoad.username);
      formData.append('password',payLoad.password);
      try {
        let res = fetch('http://localhost/api/login.php', {
          method: 'POST',
          body: formData
        }).then(response => response.json()).catch(err => {
          console.log("Error in then:");
          console.log(err);
          // return err;
        });
        console.log("Result:");
        console.log(res);
  
        return res;
      } catch (error) {
        console.log("In try catch:");
        console.log(error);
      }
    }else{
      this.sign_up(payLoad);
    }

  }
  async sign_up(payLoad:any): Promise<any>{
    const formData: FormData = new FormData();
    formData.append('name',payLoad.name);
    formData.append('surname',payLoad.surname);
    formData.append('company_name',payLoad.company_name);
    formData.append('email',payLoad.email);
    formData.append('dob',payLoad.dob);
    formData.append('gender',payLoad.gender);
    formData.append('content_type',payLoad.content_type);
    formData.append('which_photography',payLoad.which_photography);
    formData.append('which_photography1',payLoad.which_photography);
    formData.append('profile_img',payLoad.profile_img);
    // formData.append('file',payLoad.profile_img.doc,payLoad.profile_img.doc.name);
    formData.append('password',payLoad.password);
    formData.append('user_type',payLoad.user_type);
    try {
      let res = fetch('http://localhost/api/sign_up.php', {
        method: 'POST',
        body: formData
      }).then(response => response.json()).catch(err => {
        console.log("Error in then:");
        console.log(err);
        // return err;
      });
      console.log("Result:");
      console.log(res);

      return res;
    } catch (error) {
      console.log("In try catch:");
      console.log(error);
    }
  }
}
