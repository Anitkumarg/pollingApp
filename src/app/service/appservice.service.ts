import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  baseUrl = `https://etechpolltesting.onrender.com`


  constructor() { }

  options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
  };
  
  newOptions = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    'access_token': localStorage.getItem('isLogin'),
  }

  async addUser(userobj: register){
    const data = await fetch(`${this.baseUrl}/add_user?username=${userobj.userName}&password=${userobj.password}&role=${userobj.role}`,this.options)
  }

  async loginUser(userobj: logintype){
    try {
     const data = await fetch(`${this.baseUrl}/login?username=${userobj.userName}&password=${userobj.password}`,this.options).then((res)=>{
       return res.json()
      })
      return data
  
    } catch (error) {
     console.log(error) 
    }
  }

  async addPoll(obj: addPolltypes){
    try {
     const data = await fetch(`${this.baseUrl}/add_poll?title=${obj.title}&options=${obj.opt1}____${obj.opt2}____${obj.opt3}____${obj.opt4}`,this.options).then((res)=>{
       return res.json()
      })
      return data
  
    } catch (error) {
     console.log(error) 
    }
  }

  async getPollList(){
    const data = await fetch(`${this.baseUrl}/list_polls`).then((res)=>{
      return res.json()
    })
   console.log(data)
   return data
  }

  async getUserList(){
    const data = await fetch(`${this.baseUrl}/list_users`).then((res)=>{
      return res.json()
    })
    return data
  }

  async deletePoll(id : string){
    const data = await fetch(`${this.baseUrl}/delete_poll?id=${id}`).then((res)=>{
      return res.json()
    })
    return data
  }

  async deletePollOption(id : string , option:string){
    const data = await fetch(`${this.baseUrl}/delete_poll_option?id=${id}&option_text=${option}`).then((res)=>{
      return res.json()
    })
    return data
  }

  async addNewPollOption(id : string , option:string){
    const data = await fetch(`${this.baseUrl}/add_new_option?id=${id}&option_text=${option}`).then((res)=>{
      return res.json()
    })
    console.log(data, "asdfghjkl")
    return data
  }

  async updatePollTitle(id : string , title:string){
    const data = await fetch(`${this.baseUrl}/update_poll_title?id=${id}&title=${title}`,this.options).then((res)=>{
      return res.json()
    })
    return data
  }

  async createVote(id:string,option:string){
    const data = await fetch(`${this.baseUrl}/do_vote?id=${id}&option_text=${option}`, this.newOptions).then((res)=>{
      return res.json()
    })
    return data
  }

}

interface register{
  userName : string | null | undefined,
  password : string | null | undefined,
  role : string | null | undefined
}

interface logintype{
  userName : string | null | undefined,
  password : string | null | undefined
}

interface addPolltypes{
  title : string | null | undefined,
  opt1 : string | null | undefined,
  opt2 : string | null | undefined,
  opt3 : string | null | undefined,
  opt4 : string | null | undefined
}