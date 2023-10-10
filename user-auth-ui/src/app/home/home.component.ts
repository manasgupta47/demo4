import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productDetails:Product[]=[];
  pageNumber:number =0;
  showLoadButton = false;
  constructor(private productService: ProductService,private router:Router){
    
  }
  ngOnInit():void{
    this.showProduct()
  }
  searchByKeyword(searchkeyword: any) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.productDetails = [];
   this.showProduct(searchkeyword)
  }

  public showProduct(searchKey:string=""){
    this.productService.showProduct(this.pageNumber,searchKey).subscribe(
      (resp:any)=>{
        console.log(resp);
        if(resp.content.length == 8) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        resp.content.forEach((p: Product) => this.productDetails.push(p));
        
      },
      (error:HttpErrorResponse)=>{
    console.log(error);
      }
    )
    }
    showProductDetails(productId: any){
      this.router.navigate(['/productViewDetails',{productId}])
    }
    public loadMoreProduct() {
      this.pageNumber = this.pageNumber + 1;
      this.showProduct();
    }
}
