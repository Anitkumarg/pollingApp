import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppserviceService } from '../service/appservice.service';

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.component.html',
  styleUrls: ['./addpoll.component.css'],
})
export class AddpollComponent {
  constructor(private formBuilder: FormBuilder, private addpollservice : AppserviceService) {}

  loading : boolean = false
  successmsg : string = ""

  checkoutForm = this.formBuilder.group({
    title: '',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
  });

  async onSubmit() {
    this.loading = true
    const { title, opt1, opt2, opt3, opt4 } = this.checkoutForm.value;
    const data = await this.addpollservice.addPoll( { title, opt1, opt2, opt3, opt4 })
    if(data.error == 0){
      this.successmsg = "poll successfully added"
      setTimeout(()=>{
        this.successmsg = ""
      },3000)
    }
    this.loading = false
    this.checkoutForm.reset();

  }
}
