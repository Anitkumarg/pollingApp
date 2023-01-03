import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { AppserviceService } from '../service/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading:boolean=false;
  err:string=""

  constructor(
    private route : Router , 
    private formBuilder: FormBuilder,
    private loginService : AppserviceService
    ){
  }


  checkoutForm = this.formBuilder.group({
    userName: '',
    password: ''
  });

 async  onSubmit(): Promise<void> {
   this.loading = true
    const {userName , password} = this.checkoutForm.value

    const data = await this.loginService.loginUser({userName : userName , password : password})
   if(data.error == 0){
    localStorage.setItem('isLogin' , data.token)
    this.route.navigate(['home'])
   }else{
    this.err = data.error
    setTimeout(()=>{
      this.err = ""
    },3000)
   }
    this.loading = false
    this.checkoutForm.reset();
  }

  navigateTo(){
    this.route.navigate(['signup'])
  }

}
