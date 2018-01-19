import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from './product';
import {clone} from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[];
productForm:boolean = false;
editProductForm:boolean = false;
newProduct:any={};
editedProduct:any={};

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){
  this.products = this._productService.getProducts()
}
showEditProductForm(product: Product){
  if(!product){
    this.productForm = false;
    return;
  }
  this.editProductForm = true;
  this.productForm = false;
  this.editedProduct =clone(product);
  }
showAddProductForm(){
  //reset the form if in edit mode.
  if(this.products.length){
      this.newProduct = {};
  }
      this.productForm = true;
      this.editProductForm = false;
}
saveProduct(product:Product){
  this._productService.addProduct(product);
  this.productForm = false;
  this.editProductForm = false;
}
updateProduct(product:Product){
  this._productService.updateProduct(product);
  this.productForm = false;
  this.editProductForm = false;
}
removeProduct(product:Product){
  this._productService.deleteProduct(product);
}
cancelEdits(){
  this.editedProduct = {};
  this.editProductForm = false;
}
cancelNewProduct() {
  this.newProduct = {};
  this.productForm = false;
}
}
