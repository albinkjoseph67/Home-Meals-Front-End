// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   cartItemArray:any=[]
//   cartItemList = new BehaviorSubject([])

//   constructor() { }
//   addToCart(product:any){
//     this.cartItemArray.push(product)
//     this.cartItemList.next(this.cartItemArray)
//     console.log(this.cartItemList);
//     this.grandTotal()
//   }

  

//     // grandTotal
// grandTotal(){
//   let total=0
//   this.cartItemArray.map((item:any)=>{
//     total+=item.price
//     console.log(total);
    
//   })
//   return total
// }
// }
