import { Product } from "./product.model";  // see tuli rida 5

export class CartProduct {  
 constructor(
  public product: Product,
  public quantity: number
 ) {}
}
