export class Product {  // see on nüüd ära asendatud products: any
 constructor(
  public id: number,  // kui vaja siia näiteks uus muutuja teha, läheb see igale poole
  public name: string,
  public imgSrc: string,
  public price: number,
  public category: string,
  public description: string,
  public isActive: boolean
 ) {}
}
