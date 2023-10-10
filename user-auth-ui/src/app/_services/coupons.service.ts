import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupons } from '../_model/coupons.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponsService {
  constructor(private httpClient: HttpClient) {}
  public addCoupon(coupons: any) {
    return this.httpClient.post<Coupons>(
      'http://localhost:8084/coupons/addNewCoupon',
      coupons
    );
  }
  public showCoupons(pageNumber: any,searchkeyword:string="") {
    return this.httpClient.get<any>(
      'http://localhost:8084/coupons/getAllCoupons?pageNumber=' + pageNumber+"&searchKey="+searchkeyword
    );
  }
  public deleteCoupons(couponId: string) {
    return this.httpClient.delete('http://localhost:8084/coupons/' + couponId);
  }
  public getCouponById(couponId: any): Observable<Coupons> {
    return this.httpClient.get<Coupons>(
      'http://localhost:8084/coupons/' + couponId
    );
  }
  public updateCouponById(couponId: any, coupon: any) {
    return this.httpClient.put<Coupons>(
      'http://localhost:8084/coupons/' + couponId,
      coupon
    );
  }
  public getCouponByCode(couponCode: any) {
    return this.httpClient.get<Coupons>(
      'http://localhost:8903/coupons/code/' + couponCode
    );
  }
}
