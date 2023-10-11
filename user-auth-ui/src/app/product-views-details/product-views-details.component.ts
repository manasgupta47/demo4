import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { ShareDataService } from '../share-data.service';
import { UsercartService } from '../_services/usercart.service';
import { UserCart } from '../_model/usercart.model';
import { Location } from '@angular/common'
@Component({
  selector: 'app-product-views-details',
  templateUrl: './product-views-details.component.html',
  styleUrls: ['./product-views-details.component.css'],
})
export class ProductViewsDetailsComponent {
  product: any = Product;
  id: any;
  userCart: any = UserCart;
  check = false;
  constructor(private location:Location,
    private userCartService: UsercartService,
    private productService: ProductService,
    private sharData: ShareDataService,
    private route: ActivatedRoute,
    private router: Router,
    private userAuthservice: UserAuthService,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.id).subscribe(
      (data) => {
        this.product = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.userCartService
      .getProductById(this.sharData.getUserName(), this.id)
      .subscribe(
        (data) => {
          console.log(data);
          if (data) {
            this.check = true;
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  back(){
    this.location.back()
  }
  addTocart() {
    if (this.userAuthservice.isLoggedIn()) {
      if (this.userAuthservice.isUser()) {
        this.check = true;
        let obj = {
          userName: this.sharData.getUserName(),
          productId: this.product.productId,
        };
        this.userCartService.addToUserCart(obj).subscribe(
          (resp) => {
            this.check = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  goTocart() {
    this.router.navigate(['/userCart']);
  }
  payment() {
    if (this.userAuthservice.isLoggedIn()) {
      if (this.userAuthservice.isUser()) {
        this.router.navigate(['/PaymentComponent', this.id]);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  public isUser() {
    return this.userAuthservice.isUser();
  }
  public isLoggedin() {
    return this.userAuthservice.isLoggedIn();
  }
}
