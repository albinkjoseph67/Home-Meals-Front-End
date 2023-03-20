import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

const routes: Routes = [
  

   {path:'', redirectTo:'home', pathMatch:'full'},

   {path:'home' , component:HomeComponent},

   {path:'about' , component:AboutComponent},

   {path:'contact' , component:ContactComponent},

   {path:'register' , component:RegisterComponent},

   {path:'login' , component:LoginComponent},

   {path:'dashboard' , component:DashboardComponent},

   {path:'adminlogin' , component:AdminLoginComponent},

   {path:'admin' , component:AdminComponent},

   {path:'myorders' , component:MyOrdersComponent},

   {path:'edit/:id' , component:EditcomponentComponent},

   {path:'payment' , component:PaymentComponent},

   {path:'viewallorders', component:ViewordersComponent},




   {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
