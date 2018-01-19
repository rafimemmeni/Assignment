import { Injectable } from '@angular/core';
import {Product} from './product/product';
import { PRODUCT_ITEMS } from './product/product-data';
import {findIndex} from 'lodash';
@Injectable()
export class ProductService {
private pItems = PRODUCT_ITEMS;
getProducts():Product[] {
return this.pItems;
}
addProduct(product:Product){
  this.pItems.push(product);
}
updateProduct(product: Product) {
  let index = findIndex(this.pItems, (p: Product) => {
    return p.id === product.id;
  });
  this.pItems[index] = product;
}
deleteProduct(product: Product) {
  this.pItems.splice(this.pItems.indexOf(product), 1);
  console.log(this.pItems);
}


//   getProducts():Product[] {
//     return[{id: 1,
//     name: 'Scissors',
//     description: 'use this to cut stuff',
//     price: 4.99
//   }, {
//     id: 2,
//     name: 'Steak Knives',
//     description: 'use this to eat food with',
//     price: 10.99
//   }, {
//     id: 3,
//     name: 'Shot Glass',
//     description: 'use this to take shots',
//     price: 5.99
//   }]
// }
}
