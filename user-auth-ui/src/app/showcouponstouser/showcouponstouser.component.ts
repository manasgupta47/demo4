import { Component } from '@angular/core';
import { CouponsService } from '../_services/coupons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Coupons } from '../_model/coupons.model';

@Component({
  selector: 'app-showcouponstouser',
  templateUrl: './showcouponstouser.component.html',
  styleUrls: ['./showcouponstouser.component.css']
})
export class ShowcouponstouserComponent {
  couponDetails:Coupons[]=[];
  pageNumber:number =0;
  showLoadButton = false;
  constructor(private couponService: CouponsService,private router:Router){
    
  }
  ngOnInit():void{
    this.showCoupon()
  }
  searchByKeyword(searchkeyword: any) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.couponDetails = [];
   this.showCoupon(searchkeyword)
  }
  public showCoupon(searchKey:string=""){
    this.couponService.showCoupons(this.pageNumber,searchKey).subscribe(
      (resp:any)=>{
        console.log(resp);
        if(resp.content.length == 8) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        resp.content.forEach((c: Coupons) => this.couponDetails.push(c));
      },
      (error:HttpErrorResponse)=>{
    console.log(error);
      }
    )
    }

    public loadMoreCoupon() {
      this.pageNumber = this.pageNumber + 1;
      this.showCoupon();
    }
}
