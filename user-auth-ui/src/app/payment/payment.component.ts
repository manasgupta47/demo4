import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { OrderDetails } from '../_model/orderdetails.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsercartService } from '../_services/usercart.service';
import { ShareDataService } from '../share-data.service';
import { CouponsService } from '../_services/coupons.service';
import { Coupons } from '../_model/coupons.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'
import { OrderHistory } from '../_model/orderhistory.model';
import { OrderhistoryService } from '../_services/orderhistory.service';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  checkDate:any
  couponDetails:any=Coupons
  productDetails: any = Product;
  successResonse: any;
  response: any;
  id: any;
  orderhistoryObj:OrderHistory=new OrderHistory();
  couponCode !:FormGroup
  customerDetails!: FormGroup;
  paymentObj: OrderDetails = new OrderDetails();
  constructor(
    private sharData: ShareDataService,
    private orderhistoryservice:OrderhistoryService,
    private location:Location,
    private route: Router,
    private activated: ActivatedRoute,
    private productService: ProductService,
    private userCartService: UsercartService,
    private couponService:CouponsService,
    private _snackBar: MatSnackBar
  ) {
    this.customerDetails = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required,Validators.pattern("[0-9 ]{10}")]),
      address: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
    });
    this.couponCode=new FormGroup({
couponCode: new FormControl('')
    })
  }
  resp: any;
  check=false;
  get email(){
    return this.customerDetails.get('email');
  }
  get address(){
    return this.customerDetails.get('address');
  }
  get phoneNumber(){
    return this.customerDetails.get('phoneNumber')
  }
  get customerName(){
    return this.customerDetails.get('customerName');
  }
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
        this.orderhistoryObj.productId=this.id
        this.orderhistoryObj.userName=this.sharData.getUserName();
        this.orderhistoryObj.orderId=this.options.order_id
        this.orderhistoryservice.addorderhistory(this.orderhistoryObj).subscribe((data)=>{
          console.log(data);

        },(error)=>{
          console.log(error);
          
        })
        this.paymentObj.orderId=this.options.order_id 
        this.paymentObj.productName=this.productDetails.productName
        this.orderhistoryservice.addOrderDetails(this.paymentObj).subscribe(
          (data)=>{
            console.log(data);
          },
          (error)=>{
            console.log(error);
          }
        )
        this.orderhistoryservice.sendEmail(this.paymentObj).subscribe(
          (data)=>{
            console.log(data);
          },
          (error)=>{
            console.log(error);
            
          }
        )

this.route.navigate(['/orderhistory']);

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
this.couponService.getCouponByCode(this.couponCode.value.couponCode).subscribe((resp)=>{
this.checkDate=resp
if(!resp){
  this.openSnackBar("Something went wrong","Dismiss")  
}
  var date=new Date(this.checkDate.couponLastDate)
  const couponDate=date.getDate();
  const couponYear=date.getFullYear();
  const couponMonth=date.getMonth()+1;
  const date2=new Date();
  const tDate=date2.getDate();
  const tYear=date2.getFullYear();
  const tMonth=date2.getMonth();
  if(couponYear>=tYear && couponMonth>=tMonth && couponDate>=tDate){
    this.couponDetails=this.checkDate
    this.openSnackBar("Coupon added successfully","Dismiss")    
  }
  else{
    this.openSnackBar("Expired Coupon","Dismiss")
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
back(){
  this.location.back();
}
}

