import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-product-details',
  templateUrl: './update-product-details.component.html',
  styleUrls: ['./update-product-details.component.css']
})
export class UpdateProductDetailsComponent {
updateForm!:FormGroup
product:any=Product;
updatedProduct:Product =new Product()
selectedFileName: string = '';
id:any;
constructor(private _snackBar: MatSnackBar,private productService:ProductService,private route:ActivatedRoute,private router:Router){
  this.updateForm=new FormGroup({
    productName: new FormControl('',),
    productDescription: new FormControl('',),
    productActualPrice: new FormControl(0,),
    productDiscountedPrice: new FormControl(0,),
    productImage: new FormControl([],),
   })
}
ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
  this.productService.getProductById(this.id).subscribe(data=>{
    this.product=data;
    this.selectedFileName=this.product.productImage
  },
  error=>{
    console.log(error);
  })
  
  
}  
gotoProductList(){
  this.router.navigate(['/showProductToAdmin'])
}
file:any ;
onClickSubmit(){
  if(!this.updateForm.invalid){
        if(this.updateForm.value.productName){
          this.updatedProduct.productName=this.updateForm.value.productName;
        }
        else{
          this.updatedProduct.productName=this.product.productName;
        }
        if(this.updateForm.value.productDescription){
          this.updatedProduct.productDescription=this.updateForm.value.productDescription;
        }
        else{
          this.updatedProduct.productDescription=this.product.productDescription;
        }
        if(this.updateForm.value.productActualPrice){
          this.updatedProduct.productActualPrice=this.updateForm.value.productActualPrice;
        }
        else{
          this.updatedProduct.productActualPrice=this.product.productActualPrice;
        }
        if(this.updateForm.value.productDiscountedPrice){
          this.updatedProduct.productDiscountedPrice=this.updateForm.value.productDiscountedPrice;
        }
        else{
          this.updatedProduct.productDiscountedPrice=this.product.productDiscountedPrice;
        }
        if(this.base64code){
          this.updatedProduct.productImage=this.base64code;
        }
        else{
          this.updatedProduct.productImage=this.selectedFileName;
        }
      
       this.productService.updateProductById(this.id,this.updatedProduct).subscribe((data)=>{
        this.updatedProduct=data;
        this.openSnackBar("Product Updated SuccessFully","Dismiss")
        this.router.navigate(['/showProductToAdmin']);
       },
       (error)=>{
        console.log(error);
       })
  }
  else{
    this.openSnackBar("Something Went Wrong","Dismiss")
    
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
