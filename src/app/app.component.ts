import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPollingApp';

  constructor(private route:Router){}
  ngOnInit(){
    const token = localStorage.getItem('isLogin')
    if(token){
      this.route.navigate(['home'])
    }else{
      this.route.navigate(['login'])
   }
  }
}
