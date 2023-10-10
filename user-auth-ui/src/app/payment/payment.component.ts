import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { OrderDetails } from '../_model/orderdetails.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsercartService } from '../_services/usercart.service';
import { ShareDataService } from '../share-data.service';
import { CouponsService } from '../_services/coupons.service';
import { Coupons } from '../_model/coupons.model';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  couponDetails:any=Coupons
  productDetails: any = Product;
  successResonse: any;
  response: any;
  id: any;
  
  couponCode !:FormGroup
  customerDetails!: FormGroup;
  paymentObj: OrderDetails = new OrderDetails();
  constructor(
    private sharData: ShareDataService,
    private route: Router,
    private activated: ActivatedRoute,
    private productService: ProductService,
    private userCartService: UsercartService,
    private couponService:CouponsService,
    private _snackBar: MatSnackBar
  ) {
    this.customerDetails = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
    });
    this.couponCode=new FormGroup({
couponCode: new FormControl('')
    })
  }
  resp: any;
  check=false;
  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      (data) => {
        this.productDetails = data;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.productDetails);
    this.userCartService
    .getProductById(this.sharData.getUserName(), this.id)
    .subscribe(
      (data) => {
        
        if (data) {
          this.check = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  options = {
    key: '',
    amount: '',
    name: 'MGram',
    description: 'Web Development',
    image:
      'https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png',
    order_id: '',
    handler: (response: any) => {
      var event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true,
      });

      window.dispatchEvent(event);
      
      this.successResonse = response;
      if (this.successResonse) {
        this.paymentObj.productId=this.id
        this.paymentObj.userId=this.sharData.getUserName();
        console.log(this.paymentObj);
        
        this.route.navigate(['/']);
        if(this.check){
        this.remove(this.id)
        }
      }
    },

    prefill: {
      name: '',
      email: 'manas.com',
      contact: '',
    },
    notes: {
      address: '',
    },
    theme: {
      color: '#3399cc',
    },
  };
  onSubmit(): void {
    if (!this.customerDetails.invalid) {
      this.paymentObj.customerName = this.customerDetails.value.customerName;
      this.paymentObj.email = this.customerDetails.value.email;
      this.paymentObj.phoneNumber = this.customerDetails.value.phoneNumber;
      this.paymentObj.address = this.customerDetails.value.address;
      if(this.couponDetails.couponValue){
        this.paymentObj.amount=this.productDetails.productDiscountedPrice-this.couponDetails.couponValue;
      }
      else{
      this.paymentObj.amount = this.productDetails.productDiscountedPrice;
      }
      this.productService.createOrder(this.paymentObj).subscribe(
        (resp) => {
          console.log(resp);
          this.response = resp;
          this.options.key = this.response.secretId;
          this.options.order_id = this.response.razorpayOrderId;
          this.options.amount = this.response.applicationFee; //paise
          this.options.prefill.name = 'Manas Gupta';
          this.options.prefill.email = 'manas@.com';
          this.options.prefill.contact = '999999999';
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
          rzp2.on('payment.failed', (response: any) => {
            this.response = response;
          });
        },
        (error: any) => {
          
        }
      );
    }
  }
  remove(productId: any) {
    this.userCartService
      .removeProductFromCart(this.sharData.getUserName(), productId)
      .subscribe(
        (resp) => {
          
        },
        (error) => {
          console.log(error);
        }
      );
  }

 couponClick(){
console.log(this.couponCode.value.couponCode);
this.couponService.getCouponByCode(this.couponCode.value.couponCode).subscribe((resp)=>{
  this.couponDetails=resp;
  
  if(!this.couponDetails){
    this.openSnackBar("Wrong Coupon Code","Dismiss")
  }
  else{
    this.openSnackBar("Coupon added successfully","Dismiss")
  }
},
(error)=>{


})
 }
 removeCoupon(){
  console.log("remove");
  this.couponCode.reset();
  this.couponDetails.couponValue=null
  this.openSnackBar("Coupon removed successfully","Dismiss")
 }
 openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
    verticalPosition: 'top',
  });
}
}

