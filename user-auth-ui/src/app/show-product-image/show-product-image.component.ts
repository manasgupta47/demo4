import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-show-product-image',
  templateUrl: './show-product-image.component.html',
  styleUrls: ['./show-product-image.component.css']
})
export class ShowProductImageComponent {
  image:string="";
  public productdata: Product | undefined;
  productId: string | undefined;
  constructor(private productService: ProductService,){}
    ngOnInit(): void {
      this.productService.getProductById(this.productId).subscribe((data)=>{
        this.productdata=data;
        this.image=this.productdata.productImage
      },(error)=>{
        console.log(error);
      })
}
}
