import { Component } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';

@Component({

  selector: 'app-show-product-image',
  templateUrl: './show-product-image.component.html',
  styleUrls: ['./show-product-image.component.css']
})
export class ShowProductImageComponent {
  

  productImage: string | undefined;
 
  constructor(){}





}
