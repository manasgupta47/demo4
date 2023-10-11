import { Component } from '@angular/core';
import { UsercartService } from '../_services/usercart.service';
import { Product } from '../_model/product.model';
import { ShareDataService } from '../share-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent {
  productDetails: Product[] = [];
  constructor(private location:Location,
    private userCartService: UsercartService,
    private sharData: ShareDataService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.showCart();
  }
  back(){
    this.location.back()
  }
  showCart() {
    this.userCartService.getUserCart(this.sharData.getUserName()).subscribe(
      (resp) => {
        this.productDetails = resp;
        console.log(this.productDetails);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  payment(productId: any) {
    this.router.navigate(['/PaymentComponent', productId]);
    console.log(productId);
  }
  remove(productId: any) {
    this.userCartService
      .removeProductFromCart(this.sharData.getUserName(), productId)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.openSnackBar('Product Removed Successfully', 'Dismiss');
          this.refresh();
        },
        (error) => {
          console.log(error);
        }
      );
  }
  refresh(): void {
    window.location.reload();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
