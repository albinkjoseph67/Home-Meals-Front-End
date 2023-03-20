import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  errorMsg:string=''

  adminform=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@.]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){

  }
  adminlogin(){
    if(this.adminform.valid){
      let email = this.adminform.value.email
      let pswd = this.adminform.value.pswd
// adminlogin api call
this.api.adminlogin(email,pswd)
.subscribe((result:any)=>{
  // store token
  localStorage.setItem("token",result.token)

  localStorage.setItem("email",result.email)
  alert(result.message)
 this.router.navigateByUrl('admin')
},(result:any)=>{
 this.errorMsg=result.error.message
})


    }
    else{
      alert('invalid form')
    }
    }
}
