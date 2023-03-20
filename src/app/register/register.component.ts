import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerform=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@.]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){

  }

  register(){
    
    if(this.registerform.valid){
      let uname = this.registerform.value.uname
      let email = this.registerform.value.email
      let pswd = this.registerform.value.pswd

    this.api.register(uname,email,pswd)
    .subscribe((result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('login')
        },
        (result:any)=>{
          alert(result.error.message)
        }

    )

    }else{
      alert('Invalid Form')
    }

    
    
  }



}
