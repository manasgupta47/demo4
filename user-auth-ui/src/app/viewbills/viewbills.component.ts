import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbills',
  templateUrl: './viewbills.component.html',
  styleUrls: ['./viewbills.component.css']
})
export class ViewbillsComponent {
orderId:string|undefined
customerName:string|undefined
email:string|undefined
phoneNumber:string|undefined
address:string|undefined
amount :number|undefined
productName:string|undefined
ngOnInit():void{
  console.log(this.orderId);
  
  
}
}
