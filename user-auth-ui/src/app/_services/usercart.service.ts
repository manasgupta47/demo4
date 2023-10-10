import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCart } from '../_model/usercart.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root',
})
export class UsercartService {
  constructor(private httpClient: HttpClient) {}
  public addToUserCart(usercart: any) {
    return this.httpClient.post<UserCart>(
      'http://localhost:8084/usercart/addproductIncart',
      usercart
    );
  }
  public removeProductFromCart(userName:string,productId:string){
    return this.httpClient.get('http://localhost:8084/usercart/removeproduct/'+userName+'/'+productId);
  }
  public getUserCart(userName:any){
    return this.httpClient.get<Product[]>(
      'http://localhost:8084/'+userName
    )
  }
  public getProductById(userName:string,productId:string){
    return this.httpClient.get('http://localhost:8084/usercart/getProductById/'+userName+'/'+productId);
  }
}
