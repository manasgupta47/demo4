import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShareDataService } from '../share-data.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showError: boolean = false;
  userName: string | undefined;
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private shareData: ShareDataService,
    private location:Location
  ) {}
  ngOnInit(): void {}
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setJwt(response.jwtToken);
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/']);
        } else {
          this.shareData.setUserName(loginForm.value.userName);

          console.log(loginForm.value.userName);

          this.router.navigate(['/user']);
        }
      },
      (error) => {
        this.openSnackBar('Username or Password are Incorrect', 'Dismiss');
        console.log(error);
      }
    );
  }
  back(){
    this.location.back()
  }
  registerUser() {
    this.router.navigate(['/signup']);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
