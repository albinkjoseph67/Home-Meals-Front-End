import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders:any
  myOrderss:any
  emailId:any=[]
  // mail:any=[]
  

  myOrderStatusMsg=''
// cartItems:any=[]
// grantTotal:number=0
quantity:number=1;
// sum:number=0
totall:number=0
total2:any=[]

price:any
totalAmount:any
itemName:any
cartitems:any
email:any
itemQty:any



// price:number=this.cartItems.price;
// totalCount:number=0;


  constructor(private api:ApiService,private router:Router,private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {

    if(!localStorage.getItem("token")){
      alert("Please Login!!!!!")
      // navigate to login
    this.router.navigateByUrl('')
    }
   
    // this.cart.cartItemList.subscribe((data:any)=>{
    //     this.cartItems = data
    // })
    
// this.email= localStorage.getItem("email")
// console.log(this.email);


this.activatedRoute.params
.subscribe((result:any)=>{
  result=localStorage.getItem("email")
  
  
  this.emailId=result
  console.log(this.emailId);

})

    this.api.getmyOrders(this.emailId)
    .subscribe((result:any)=>{
      console.log(result);
      
      
      this.myOrders = result.orders
      
      console.log(this.myOrders);
      
      
      this.grantTotal()
      
      
      if(this.myOrders.length==0){
        this.myOrderStatusMsg='Orderlist empty'
      }
    },

    (result:any)=>{
      if(result.error.message){
        this.myOrderStatusMsg='Orderlist empty'
      }
       }
       ) 
       
       
    
  }



  // increment

  increment(id:any,qty:any){
         for(let i=0;i<this.myOrders.length;i++){
          if(this.myOrders[i].id==id){
            if(qty != 5)
            this.myOrders[i].qty= (qty)+1
          }
         }
         this.grantTotal()

       
  }
  // decrement

  decrement(id:any,qty:any){
    for(let i=0;i<this.myOrders.length;i++){
     if(this.myOrders[i].id==id){
       if(qty != 1)
       this.myOrders[i].qty= (qty)-1
     }
    }
    this.grantTotal()
  
}
// total

grantTotal(){
  if(this.myOrders){
  this.totall =  this.myOrders.reduce(function(acc:any,val:any){
      return acc + (val.price * val.qty)
    },0);
  }
}




  // 
  
// removeItem

removeItem(qty:any,id:any,iname:any,img:any,type:any,price:any){
  let  mail =localStorage.getItem("email")

  this.router.navigateByUrl('/myorders')
  this.api.deleteItemCart(qty,id,iname,img,type,price,mail)
  .subscribe((result:any)=>{
    window.location.reload();
     this.myOrders=result.myOrders
     if(this.myOrders.length==0){
      this.myOrderStatusMsg='Cart Empty'
     }

  },
  (result:any)=>{
    alert(result.error.message)
  }
  
  )
}


   
 
 
}

  


