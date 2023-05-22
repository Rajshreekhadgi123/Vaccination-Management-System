import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email="";
  password = "";


  logininfo : any=[];

  login()
  {
    let obj = {
      email:this.email,
      password:this.password
    }
    this.logininfo.push(obj);
    console.log("data = " , this.logininfo);
    this.clear();
  }

  clear()
  {
    this.email = "";
    this.password = ""
  }
  
}
