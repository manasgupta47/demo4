import { Component } from '@angular/core';
import { Coupons } from '../_model/coupons.model';
import { CouponsService } from '../_services/coupons.service';

@Component({
  selector: 'app-show-coupons-image',
  templateUrl: './show-coupons-image.component.html',
  styleUrls: ['./show-coupons-image.component.css']
})
export class ShowCouponsImageComponent {
  image:string="";
  public coupondata: Coupons | undefined;
  couponId: string | undefined;
  constructor(private couponService: CouponsService){}
  ngOnInit(): void {
    this.couponService.getCouponById(this.couponId).subscribe((data)=>{
      this.coupondata=data;
      this.image=this.coupondata.couponImage
    },(error)=>{
      console.log(error);
    })
}
}
