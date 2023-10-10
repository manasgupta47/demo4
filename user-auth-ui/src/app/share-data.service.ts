import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  public setUserName(userName:string){
    localStorage.setItem("userName",userName);
    }
    public getUserName():string{
     return localStorage.getItem("userName")!;
      }
}
