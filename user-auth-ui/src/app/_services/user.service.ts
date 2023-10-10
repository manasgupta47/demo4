import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8084';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient,
    private userAuthService:UserAuthService) {}
    public signup(signupData:any){
      return this.httpclient.post(this.PATH_OF_API+'/checkuser/registerNewUser',signupData);
    }
  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/admin/authenticate',loginData,{
      headers:this.requestHeader
    });

  }
  public findByUserName(userName:string){
    return this.httpclient.get(this.PATH_OF_API+'/checkuser/'+userName)
  }
  public roleMatch(allowedRoles: any):boolean{
    let isTrue=false;
    const userRoles:any=this.userAuthService.getRoles();

    if(userRoles !=null && userRoles){
      for(let i =0;i<userRoles.length;i++){
        for(let j=0;j<allowedRoles.length;j++){
          if(userRoles[i].roleName===allowedRoles[j]){
            isTrue=true;
          }else{
            isTrue=false;
          }
        }
      }
    }
    return isTrue;
  }
}
