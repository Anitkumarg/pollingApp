import { Component, Input } from '@angular/core';
import { AppserviceService } from 'src/app/service/appservice.service';
import { pollList } from '../home.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {

  @Input() poll :any= {}
  isAddNewOption : boolean = false
  isTitleEdit : boolean = false
  newOptionValue : string = ""
  newTitleValue : string = ""
  editOptionValue : string = ""

  constructor(private handlePoll : AppserviceService){}



  handlePollDelete(){
    this.handlePoll.deletePoll(this.poll._id)
  }

  handleOptionDelete(option : string){
    this.handlePoll.deletePollOption(this.poll._id , option)
  }

  handleAddNewOption(){
    this.isAddNewOption = true
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

  async addNewOption(){
    if(this.newOptionValue){
      const data = await this.handlePoll.addNewPollOption(this.poll._id , this.newOptionValue)
      if(data.error == 0){
        this.isAddNewOption = false;
        this.newOptionValue = "";
      }
    }
  }

  async handleEditTitle(){
    this.isTitleEdit = true;
      if(this.newTitleValue){
        const data = await this.handlePoll.updatePollTitle(this.poll._id , this.newTitleValue)
        if(data.error == 0){
          this.newTitleValue = "";
          this.isTitleEdit=false;
        }
      } 
  }

  async doVote(option : string){
    const data = await this.handlePoll.createVote(this.poll._id , option)
  }

}
