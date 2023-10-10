import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles')!);
  }
  public setJwt(jwttoken: string) {
    localStorage.setItem('jwttoken', jwttoken);
  }
  public getJwt(): string {
    return localStorage.getItem('jwttoken')!;
  }
  public clear() {
    localStorage.clear();
  }
  public isLoggedIn() {
    return this.getRoles() && this.getJwt();
  }
  public isAdmin(){
   const roles :any[]= this.getRoles();
   return roles[0].roleName === 'Admin';
  }
  public isUser(){
    const roles :any[]= this.getRoles();
    return roles[0].roleName === 'User';
   }
}
