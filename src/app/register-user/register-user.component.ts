import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AppserviceService } from '../service/appservice.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

constructor(private route : Router , private formBuilder : FormBuilder , private formsubmit : AppserviceService){}

checkoutForm = this.formBuilder.group({
  userName: '',
  role:'',
  password: ''
});

onSubmit(){
  const {
    userName,
    role,
    password
  } = this.checkoutForm.value
  this.formsubmit.addUser({"userName" : userName, "password": password, "role":role})
  this.checkoutForm.reset();
}

  navigateTo(){
    this.route.navigate(['login'])
  }
}
