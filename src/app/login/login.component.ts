import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMsg:string=''
  mail:any

  loginform=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@.]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){

  }

  login(){
  
if(this.loginform.valid){
  let email = this.loginform.value.email
  let pswd = this.loginform.value.pswd
// login api call
  this.api.login(email,pswd)
  .subscribe((result:any)=>{
     
    // store token
    localStorage.setItem("token",result.token)

    localStorage.setItem("email",result.email)

    alert(result.message)
    this.router.navigateByUrl('dashboard')

  },
  (result:any)=>{
    this.errorMsg=result.error.message

  })


}else{
  alert('Invalid Form')
}
    
    
    
    
    
    

  }
}
