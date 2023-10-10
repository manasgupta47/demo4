import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private userService:UserService,
    private router:Router, private _snackBar: MatSnackBar){}
  signup(signupForm: NgForm) {
    this.userService.findByUserName(signupForm.value.userName).subscribe((resp)=>{
  this.openSnackBar("Username already exist","Dismiss");
  },(error)=>{
    
    this.userService.signup(signupForm.value).subscribe(
      (response)=>{
        this.router.navigate(['/login'])
        
        
      },
      (error)=>{
        this.openSnackBar("Something Went","wrong");
      }
    )
  })
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
