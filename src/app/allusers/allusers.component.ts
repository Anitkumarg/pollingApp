import { Component } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  users : any = []
  constructor(private alluserservice :AppserviceService ){
  
  }
  ngOnInit(){
    this.getUserList()
  }

  async getUserList(){
    const data = await this.alluserservice.getUserList()
    if(data.error == 0){
      this.users = data.data
    }
  }

}
