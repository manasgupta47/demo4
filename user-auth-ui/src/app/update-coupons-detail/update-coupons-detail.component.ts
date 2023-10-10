import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Coupons } from '../_model/coupons.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CouponsService } from '../_services/coupons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-update-coupons-detail',
  templateUrl: './update-coupons-detail.component.html',
  styleUrls: ['./update-coupons-detail.component.css']
})
export class UpdateCouponsDetailComponent {
  updateForm!:FormGroup
  coupon:any=Coupons
  updateCoupon:Coupons=new Coupons()
  selectedFileName:string=''
  id:any;
  constructor(private _snackBar: MatSnackBar,private couponService:CouponsService,private route:ActivatedRoute,private router:Router){
    this.updateForm=new FormGroup({
      couponName: new FormControl('',),
      couponCode: new FormControl('',),
      couponLastDate: new FormControl('',),
      couponValue: new FormControl('',),
      couponImage: new FormControl([],)
     })
  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.couponService.getCouponById(this.id).subscribe(data=>{
      this.coupon=data
      this.selectedFileName=this.coupon.couponImage
    },
    error=>{
      console.log(error);
    })
  }
  onClickSubmit(){
    if(!this.updateForm.invalid){      
      if(this.updateForm.value.couponName){
        this.updateCoupon.couponName=this.updateForm.value.couponName;
      }
      else{
        this.updateCoupon.couponName=this.coupon.couponName;
      }
      if(this.updateForm.value.couponCode){
        this.updateCoupon.couponCode=this.updateForm.value.couponCode;
      }
      else{
        this.updateCoupon.couponCode=this.coupon.couponCode;
      }
      if(this.updateForm.value.couponLastDate){
        this.updateCoupon.couponLastDate=this.updateForm.value.couponLastDate;
      }
      else{
        this.updateCoupon.couponLastDate=this.coupon.couponLastDate;
      }
      if(this.updateForm.value.couponValue){
        this.updateCoupon.couponValue=this.updateForm.value.couponValue;
      }
      else{
        this.updateCoupon.couponValue=this.coupon.couponValue;
      }
      if(this.base64code){
        this.updateCoupon.couponImage=this.base64code;
      }
      else{
        this.updateCoupon.couponImage=this.selectedFileName;
      }
      this.couponService.updateCouponById(this.id,this.updateCoupon).subscribe((data)=>{
        this.updateCoupon=data;
        this.openSnackBar("Coupon Updated SuccessFully","Dismiss")
        this.router.navigate(['/showCouponsToAdmin']);
      },
      (error)=>{
        console.log(error);
        
      })
    }
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  }
  
  
  

