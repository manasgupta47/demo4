import { Component } from '@angular/core';
import { OrderhistoryService } from '../_services/orderhistory.service';
import { Location } from '@angular/common'
import { OrderDetails } from '../_model/orderdetails.model';
@Component({
  selector: 'app-order-history-to-admin',
  templateUrl: './order-history-to-admin.component.html',
  styleUrls: ['./order-history-to-admin.component.css']
})
export class OrderHistoryToAdminComponent {
  orderHistory:any
  arr:any=[]
  displayedColumns: string[] = ['Order Id', 'Product Name', 'Coustomer Name','Email','Phone Number','Address','Amount'];
  constructor(private location:Location,private orderhistroyservice:OrderhistoryService ) {   
  }
  ngOnInit():void{
   this.showOrderHistory()
  }
  showOrderHistory(){
    this.orderhistroyservice.getAllOrderHistory().subscribe((resp:any)=>{
      this.orderHistory=resp
    })
  }
  back(){
    this.location.back()
  }
  
  
}
