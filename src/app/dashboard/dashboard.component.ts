import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items:any=[]
  email:any
  

  constructor(private api:ApiService,private router:Router){

  }
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please Login!!!!!")
      // navigate to login
    this.router.navigateByUrl('')
    }

    this.api.getAllItems()
    .subscribe((result:any)=>{
      this.items= result.items
      console.log(this.items);
      
    })
    
  }

  // addtoOrderlist
  addToCart(item:any,id:any){
    
    this.email= localStorage.getItem("email")
   console.log(this.email);
   
  //   this.cart.addToCart(item)
    this.api.addToOrderlist(this.email,item,id)
    .subscribe((result:any)=>{
     alert(result.message)
    },
    (result:any)=>{
     alert(result.error.message)
    }
    )
}

logout(){
  localStorage.removeItem("token")
  localStorage.removeItem("email")

  setTimeout(() => {

    // navigate to login
  this.router.navigateByUrl('')
  
  }, 1000);
}

}
