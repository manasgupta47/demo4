import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderHistory } from '../_model/orderhistory.model';
import { OrderDetails } from '../_model/orderdetails.model';
import { FullOrderDetails } from '../_model/FullOrderDetails.module';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {

  constructor(private httpClient: HttpClient) { }
  public addorderhistory(orderhistory:any){
    return this.httpClient.post<OrderHistory>(
      'http://localhost:8084/orderhistory/addOrderHistory',orderhistory
    )
  }
  public addOrderDetails(orderdetails:any){
    return this.httpClient.post<OrderDetails>(
      'http://localhost:8084/orderdetails/addorderDetails',orderdetails
    )
  }
  public getOrderHistory(userName:string){
    return this.httpClient.get<FullOrderDetails>(
      'http://localhost:8084/orderhistorydetails/'+userName
    )
  }
  public getAllOrderHistory(){
    return this.httpClient.get<OrderDetails>(
      'http://localhost:8084/orderdetails/getallorderdetails'
    )
  }
  public sendEmail(orderDetails:any){
    return this.httpClient.post<OrderDetails>(
      'http://localhost:8084/orderdetails/sendMail',orderDetails
    )
  }
} 
