import { Component } from '@angular/core';
import { OrderhistoryService } from '../_services/orderhistory.service';
import { FullOrderDetails } from '../_model/FullOrderDetails.module';
import { ShareDataService } from '../share-data.service';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common'
import { ViewbillsComponent } from '../viewbills/viewbills.component';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  fullOrderDetails: FullOrderDetails[] = [];

    constructor(public dialog: MatDialog,private location:Location,private orderhistory:OrderhistoryService,private sharData:ShareDataService){}
  
 
ngOnInit():void{
 
this.showorderhistory()
}

showorderhistory(){
  this.orderhistory.getOrderHistory(this.sharData.getUserName()).subscribe((resp:any)=>{
    resp.forEach((p: FullOrderDetails) => this.fullOrderDetails.push(p));
  console.log(this.fullOrderDetails);
 

  },(error)=>{
    console.log(error);
    
  })
}
back(){
  this.location.back()
}
showOrderHistory(fullOrderDetails:any){
  let dialogRef= this.dialog.open(ViewbillsComponent,{
    height: '400px',
    width: '600px',
  }
  )
  dialogRef.componentInstance.orderId=fullOrderDetails.orderId
  dialogRef.componentInstance.customerName=fullOrderDetails.customerName
  dialogRef.componentInstance.email=fullOrderDetails.email
  dialogRef.componentInstance.amount=fullOrderDetails.amount
  dialogRef.componentInstance.address=fullOrderDetails.address
  dialogRef.componentInstance.phoneNumber=fullOrderDetails.phoneNumber
  dialogRef.componentInstance.productName=fullOrderDetails.productName
}
}
