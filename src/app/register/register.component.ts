import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // declaring variables

  firstname = "";
  lastname = "";
  email = "";
  password = "";
  phone = "";

  registration: any = [];

  // submit function

  submit() {

    // created an object to store the data into the array.

    let obj = {

      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      phone: this.phone

      

    }

    // to store the data
    // used push methd to push the data into the array
    
    this.registration.push(obj)
    console.log("Data :", this.registration);
    // alert("You have successfully Registered..")

    // calling clear function

    this.clear();

    // show alert message

    // this.showalert = true;

  }

  //to clear the input field

  clear() {
      this.firstname = "",
      this.lastname = "",
      this.email = "",
      this.password = "",
      this.phone = ""
  }

}
