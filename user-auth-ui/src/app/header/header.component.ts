import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private userAuthservice:UserAuthService,
    private router:Router,
    public userService:UserService,
    private shareData:ShareDataService){}
    public isLoggedin(){
      return this.userAuthservice.isLoggedIn();
    }
    
    public logout(){
      this.userAuthservice.clear();
      this.router.navigate(['/']);
    }
    public isAdmin(){
      return this.userAuthservice.isAdmin();
    }
    public isUser(){
      return this.userAuthservice.isUser();
    }
   
}
