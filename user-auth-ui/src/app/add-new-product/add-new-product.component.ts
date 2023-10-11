import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../_services/product.service';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent {
  productForm!: FormGroup;

  productObj: Product = new Product();
  file!: any[];
  image: string = '';
  constructor(
    private location:Location,
    private productService: ProductService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
      productDiscountedPrice: new FormControl(0, [Validators.required]),
      productActualPrice: new FormControl(0, [Validators.required]),
      productImage: new FormControl([], Validators.required),
    });
  }


  onClickSubmitForm() {
    if (!this.productForm.invalid) {
      this.productObj.productName = this.productForm.value.productName;
      this.productObj.productDescription =
        this.productForm.value.productDescription;
      this.productObj.productActualPrice =
        this.productForm.value.productActualPrice;
      this.productObj.productDiscountedPrice =
        this.productForm.value.productDiscountedPrice;
      this.productObj.productImage = this.base64code;
      // this.productService.addProduct(this.productObj, this.file[0]).subscribe(data =>
      this.productService
        .addProduct(this.productObj)
        .subscribe((data) => {console.log(data)
        this.openSnackBar("Product Added Successfully","Dismiss")},(error)=>{
          console.log(error);
          this.openSnackBar('Something Went Wrong !!', 'Dismiss');
          
    });    
      this.router.navigate(['/addNewProduct']);
      window.location.reload();
    } else {
     this.openSnackBar("Something Went Wrong","Dismiss")
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
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
  resetData() {
    this.productForm.reset();
  }
  back(){
    this.location.back();
  }
}
