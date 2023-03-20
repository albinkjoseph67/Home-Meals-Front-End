import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
items:any=[]
datas:any=[[]]

  constructor(private api:ApiService){

  }
  ngOnInit(): void {

    this.api.getAllOrders()
    .subscribe((result:any)=>{
      this.items= result.items
      console.log(this.items);
      // this.datas =this.items
      // console.log(this.datas.orders);
      for (let i = 0; i < this.items.length; i++) {
        let username = this.items[i].username;
        let email = this.items[i].email;

        let iname = this.items[i].orders[0]?.iname;
        let price =this.items[i].orders[0]?.price;
                    
        // let id = this.userlist[i].orders[0]?.iname;
        // let url = this.userlist[i].groups[0]?.url;
        console.log(username);
        console.log(iname);
        
        
      
      }
      
    })
    
  }

}
