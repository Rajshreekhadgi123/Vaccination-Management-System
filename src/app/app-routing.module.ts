import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {
    path:"" , component:RegisterComponent , pathMatch:'full',
  },
  {
    path:"home" , component:HomeComponent ,
  },
  {
    path:"login" , component:LoginComponent ,
  },
  {
    path:"vaccine" , component:VaccineComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
