import { Component } from '@angular/core';
import { Coupons } from '../_model/coupons.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponsService } from '../_services/coupons.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscriber } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-coupons-catalog',
  templateUrl: './coupons-catalog.component.html',
  styleUrls: ['./coupons-catalog.component.css'],
})
export class CouponsCatalogComponent {
  couponForm!: FormGroup;
  couponObj: Coupons = new Coupons();
  file!: any[];
  image: string = '';
  constructor(
    private couponService: CouponsService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location:Location
  ) {
    this.couponForm = new FormGroup({
      couponName: new FormControl('', [Validators.required]),
      couponCode: new FormControl('', [Validators.required]),
      couponValue:new FormControl('',[Validators.required]),
      couponLastDate: new FormControl('', [Validators.required]),
      couponImage: new FormControl([], Validators.required),
    });
  }
  back(){
   this.location.back()
  }
  onClickSubmitForm() {
    if (!this.couponForm.invalid) {
      this.couponObj.couponName = this.couponForm.value.couponName;
      this.couponObj.couponCode = this.couponForm.value.couponCode;
      this.couponObj.couponValue=this.couponForm.value.couponValue;
      this.couponObj.couponLastDate = this.couponForm.value.couponLastDate;
      this.couponObj.couponImage = this.base64code;
      // this.productService.addProduct(this.couponObj, this.file[0]).subscribe(data =>
      this.couponService
        .addCoupon(this.couponObj)
        .subscribe((data) =>{ console.log(data)
          this.openSnackBar('Coupon Added Successfully', 'Dismiss');
        },
        (error)=>{
          console.log(error);
          this.openSnackBar('Something Went Wrong !!', 'Dismiss');
        });

     
      this.router.navigate(['/addNewCoupons']);
      window.location.reload();
    } else {
      this.openSnackBar('Something Went Wrong !!', 'Dismiss');
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  myImage!: Observable<any>;
  base64code!: any;
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //console.log(file)
    this.convertToBase64(file);
  };
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      // console.log(d)
      this.myImage = d;
      this.base64code = d;
    });
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }
  resetData() {
    this.couponForm.reset();
  }
}
