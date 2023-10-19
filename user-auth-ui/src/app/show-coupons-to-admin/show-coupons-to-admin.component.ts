import { Component } from '@angular/core';
import { Coupons } from '../_model/coupons.model';
import { CouponsService } from '../_services/coupons.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowCouponsImageComponent } from '../show-coupons-image/show-coupons-image.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-show-coupons-to-admin',
  templateUrl: './show-coupons-to-admin.component.html',
  styleUrls: ['./show-coupons-to-admin.component.css']
})
export class ShowCouponsToAdminComponent {
  showLoadMoreProductButton = false;
  pageNumber:number=0;
  showTable=false;
  couponsDetails:Coupons[]=[];
  displayedColumns: string[] = ['Id', 'Coupon Name', 'Coupon Code','Coupon Value','Coupon Last Date','Actions'];
  ngOnInit():void{
    this.showCoupons();
  }
  constructor(private location:Location,private router:Router,private couponsService: CouponsService,private _snackBar: MatSnackBar,public dialog: MatDialog){}
  public showCoupons(searchKeyword: string = ""){
    this.showTable=false;
  this.couponsService.showCoupons(this.pageNumber,searchKeyword).subscribe(
    (resp:any)=>{
      console.log(resp);
      resp.content.forEach((c: Coupons) => this.couponsDetails.push(c));
      this.showTable = true;
      if(resp.content.length == 8) {
        this.showLoadMoreProductButton = true;
      } else {
        this.showLoadMoreProductButton = false;
      }
    },
    (error:HttpErrorResponse)=>{
  console.log(error);
    }
  )
  }
  back(){
    this.location.back()
  }
  searchByKeyword(searchkeyword: any){
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.couponsDetails = [];
    this.showCoupons(searchkeyword);
  }
  public deleteCoupons(couponsId:string){
    this.couponsService.deleteCoupons(couponsId).subscribe(
      (resp)=>{
        console.log(resp);
        this.showCoupons();
        this.openSnackBar('Coupon Deleted Successfully', 'Dismiss');
        window.location.reload();
      },
      (error:HttpErrorResponse)=>{
    console.log(error);
    this.openSnackBar('Something Went Wrong!!', 'Dismiss');
      }
    )
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  showImage(coupon: any){
    let dialogRef= this.dialog.open(ShowCouponsImageComponent,{
       height: '400px',
       width: '600px',
     }
     )
     dialogRef.componentInstance.couponImage =coupon.couponImage;
   }
   editCoupon(couponId:any){
    this.router.navigate(['/updateCouponDetail',couponId])
   }
   loadMoreCoupon(){
    this.pageNumber = this.pageNumber + 1;
    this.showCoupons();
  }
  }
  

