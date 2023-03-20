import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  additemform=this.fb.group({
    qty:['',[Validators.required]],

    id:['',[Validators.required]],
    iname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z() ]*')]],
    img:['',[Validators.required]],
    des:['',[Validators.required]],
    type:['',[Validators.required,Validators.pattern('[0-9a-zA-Z -]*')]],
    price:['',[Validators.required,Validators.pattern('[0-9./ -]*')]]


  })

items:any=[]
datas:any
id:any
allitems:any=[]
alldata:any


  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){

  }

  ngOnInit(): void {

    if(!localStorage.getItem("token")){
      alert("Please Login!!!!!")
      // navigate to login
    this.router.navigateByUrl('')
    }

    this.api.getAllitems()
    .subscribe((result:any)=>{
      this.items= result.items
      console.log(this.items);
      
    })

    

   
  }

  additem(){
    
    if(this.additemform.valid){
      let qty = this.additemform.value.qty

      let id = this.additemform.value.id
      let iname = this.additemform.value.iname
      let img = this.additemform.value.img
      let des = this.additemform.value.des
      let type = this.additemform.value.type
      let price = this.additemform.value.price

    this.api.additem(qty,id,iname,img,des,type,price)
    .subscribe((result:any)=>{
          alert(result.message)
       
        },
        (result:any)=>{
          alert(result.error.message)

        }

    )

    }else{
      alert('Invalid Form')
    }
    setTimeout(() => {
      window.location.reload()
            
            
            
          }, 1000);
    
    
  }

  removeItem(iname:any){
    this.api.removeItem(iname)
    .subscribe(
      // 200
      (result:any)=>{
      this.datas = result.additem
      alert("Item removed successfully")
          setTimeout(() => {
      window.location.reload() 
            
          }, 1000);
      
    },
    // 400
    (result:any)=>{
      alert(result.error.message)
    })
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
