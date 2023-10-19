import { Component } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImageComponent } from '../show-product-image/show-product-image.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
 
  selector: 'app-show-product-to-admin',
  templateUrl: './show-product-to-admin.component.html',
  styleUrls: ['./show-product-to-admin.component.css']
})

export class ShowProductToAdminComponent {
  showLoadMoreProductButton = false;
  pageNumber:number=0;
  showTable=false;
  productDetails:Product[]=[];
  displayedColumns: string[] = ['Id', 'Product Name', 'description', 'Product Actual Price','Product Discounted Price','Actions'];
  ngOnInit():void{
    this.showProduct()
  }
constructor(private location: Location,private productService: ProductService,private _snackBar: MatSnackBar, public dialog: MatDialog,
  private router:Router){}

public showProduct(searchKeyword: string = ""){
  this.showTable=false;
this.productService.showProduct(this.pageNumber,searchKeyword).subscribe(
  (resp:any)=>{
    console.log(resp);
    resp.content.forEach((p: Product) => this.productDetails.push(p));
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
  this.productDetails = [];
  this.showProduct(searchkeyword);
}
public deleteProduct(productId:string){
  this.productService.deleteProduct(productId).subscribe(
    (resp)=>{
      console.log(resp);
      this.showProduct();
      this.openSnackBar('Product Deleted Successfully', 'Dismiss');
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

showImage(product: any){
 let dialogRef= this.dialog.open(ShowProductImageComponent,{
    height: '400px',
    width: '600px',
  }
  )
  dialogRef.componentInstance.productImage =product.productImage;
  
}
editProductDetails(productId: any){
  this.router.navigate(['/updateProductDetails',productId])
}
loadMoreProduct(){
  this.pageNumber = this.pageNumber + 1;
  this.showProduct();
}
}
