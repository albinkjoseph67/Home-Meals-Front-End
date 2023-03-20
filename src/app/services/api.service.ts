import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  




  constructor(private http:HttpClient) { }

  // register
  register(uname:any,email:any,pswd:any){
    const body={
      uname,
      email,
      pswd
    }
   return this.http.post('http://localhost:3000/register',body)

  }

  // login
login(email:any,pswd:any){
      const body={
        email,
        pswd
      }
   return this.http.post('http://localhost:3000/login',body)

}

//appending token to the http headers
appendToken(){

  //  fetch token from localstorage
  const token= localStorage.getItem("token") || ''
  // create http header
    var headers = new HttpHeaders()
  if(token){
    // append token inside headers
    headers= headers.append('access-token',token) 
    // overload
    options.headers=headers
  }
  return options
  

}

// adminlogin
adminlogin(email:any,pswd:any){
  const body={
    email,
    pswd
  }
  console.log(body);
  return this.http.post('http://localhost:3000/adminlogin',body)
  
  
}

// additem
additem(qty:any,id:any,iname:any,img:any,des:any,type:any,price:any){
  const body={
    qty,
    id,
    iname,
    img,
    des,
    type,
    price
  }
 return this.http.post('http://localhost:3000/additem',body)

}
// all items api
getAllItems(){
  return this.http.get('http://localhost:3000/dashboard',this.appendToken())
}

// addToOrderlist
addToOrderlist(email:any,item:any,id:any){
  const body={
    email,
    item,
    id
  }
  return  this.http.post('http://localhost:3000/addToOrderlist',body)
  
  }

  // get-wishlist
  getmyOrders(email:any){
  
    
    return this.http.get('http://localhost:3000/myorders/'+email)
   
  }

  // getallitems api
  getAllitems(){
    return  this.http.get('http://localhost:3000/getallitems')
  }
 
// remove-item api call
removeItem(iname:any){
  return this.http.delete('http://localhost:3000/delete-item/'+iname)
}

// getAn-item api call
getAnItem(id:any){
  return this.http.get('http://localhost:3000/get-item/'+id)
}

// updateitem
updateitem(qty:any,id:any,iname:any,img:any,des:any,type:any,price:any){
  const body={
    qty,
    id,
    iname,
    img,
    des,
    type,
    price
  }
 return this.http.put('http://localhost:3000/updateitem/',body)

}

// deleteItemCart
deleteItemCart(qty:any,id:any,iname:any,img:any,type:any,price:any,mail:any){
  const body={
    qty,
    id,
    iname,
    img,
    type,
    price,
    mail
  }
  return this.http.put('http://localhost:3000/delete-item-cart/',body)
}

// getallorders api
getAllOrders(){
  return  this.http.get('http://localhost:3000/getallorders')
}


}

