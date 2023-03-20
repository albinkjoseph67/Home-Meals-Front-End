import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css']
})
export class EditcomponentComponent implements OnInit {

  view:any=[]
  productId:any
  viewItem:any

  

  updateitemform=this.fb.group({
    qty:['',[Validators.required]],

    id:['',[Validators.required]],
    iname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z() ]*')]],
    img:['',[Validators.required]],
    des:['',[Validators.required]],
    type:['',[Validators.required,Validators.pattern('[0-9a-zA-Z -]*')]],
    price:['',[Validators.required,Validators.pattern('[0-9./ -]*')]]


  })

  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
     this.activatedRoute.params
     .subscribe((result:any)=>{
      console.log(result['id']);
      this.productId=result['id']
  })

  this.api.getAnItem(this.productId)
  .subscribe((result)=>{
    // console.log(result.data);
    this.view=result
    console.log(this.view.data);
    this.viewItem=this.view.data
    
  })
     
  }

  // updateItem
  updateItem(){
 let qty:any

 let id:any
 let iname:any
 let img:any
 let des:any
 let type:any
 let price:any
    if(this.updateitemform.valid){
      qty = this.updateitemform.value.qty

       id = this.updateitemform.value.id
       iname = this.updateitemform.value.iname
       img = this.updateitemform.value.img
       des = this.updateitemform.value.des
       type = this.updateitemform.value.type
       price = this.updateitemform.value.price
    }

    this.api.updateitem(qty,id,iname,img,des,type,price)
    .subscribe((result:any)=>{
      // alert(result.message)
      if(result){
        // alert(result.message)
      }
      this.router.navigateByUrl('admin')

    },
    (result:any)=>{
      alert(result.error.message)

    })
    

  }


}
