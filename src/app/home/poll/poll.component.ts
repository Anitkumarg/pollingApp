import { Component, Input } from '@angular/core';
import { AppserviceService } from 'src/app/service/appservice.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})

export class PollComponent {

  pollList: any = [];
  isAddNewOption : boolean = false
  isTitleEdit : boolean = false
  newOptionValue : string = ""
  newTitleValue : string = ""
  editOptionValue : string = ""

  constructor(private handlePoll : AppserviceService , private getpollListservice: AppserviceService){}

  ngOnInit() : void {
  this.getpollList();
  }

  async handlePollDelete(id: any){
    await this.handlePoll.deletePoll(id)
    this.getpollList();
  }

  async handleOptionDelete(id : any , option : string){
    await this.handlePoll.deletePollOption(id , option)
    this.getpollList();
  }

  handleAddNewOption(){
    this.isAddNewOption = true
    this.getpollList();
  }

  handleChange(e:Event , keys:string){
    if(keys=='addoption'){
      this.newOptionValue = (<HTMLInputElement>e.target).value
    }else if(keys=='editTitle'){
      this.newTitleValue = (<HTMLInputElement>e.target).value
    }else{
      this.editOptionValue =  (<HTMLInputElement>e.target).value
    }
    
  }

  async addNewOption(id : any){
    if(this.newOptionValue){
      const data = await this.handlePoll.addNewPollOption(id , this.newOptionValue)
      if(data.error == 0){
        this.isAddNewOption = false;
        this.newOptionValue = "";
      }
    this.getpollList();
    }
  }

  async getpollList() {
    const data = await this.getpollListservice.getPollList();
    this.pollList = data.data
    console.log(this.pollList)
  }

  async handleEditTitle(id : any){
    this.isTitleEdit = true;
      if(this.newTitleValue){
        const data = await this.handlePoll.updatePollTitle(id , this.newTitleValue)
        if(data.error == 0){
          this.newTitleValue = "";
          this.isTitleEdit=false;
        }
      } 
    this.getpollList();
  }

  async doVote(id : any , option : string){
    const data = await this.handlePoll.createVote(id , option)
  }

}
