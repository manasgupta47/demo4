import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/orderdetails.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  public addProduct(product: any) {
    return this.httpClient.post<Product>(
      'http://localhost:8084/product/addNewProduct',
      product
    );
  }
  public showProduct(pageNumber:any,searchkeyword:string="") {
    return this.httpClient.get<any>(
      'http://localhost:8084/product/getAllProducts?pageNumber='+pageNumber+"&searchKey="+searchkeyword
    );
  }
  public deleteProduct(productId: string) {
    return this.httpClient.delete('http://localhost:8084/product/' + productId);
  }
  public getProductById(productId: any): Observable<Product> {
    return this.httpClient.get<Product>(
      'http://localhost:8084/product/' + productId
    );
  }
  public updateProductById(
    productId: string,
    product: Product
  ): Observable<Product> {
    return this.httpClient.put<Product>(
      'http://localhost:8084/product/' + productId,
      product
    );
  }
  public createOrder(details: any) {
    return this.httpClient.post<OrderDetails>(
      'http://localhost:8084/pg/createOrder',
      details
    );
  }
}
