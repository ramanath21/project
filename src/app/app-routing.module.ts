import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

import { AacartComponent } from './aacart/aacart.component';
import { AhomeComponent } from './ahome/ahome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AaboutComponent } from './aabout/aabout.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { HeadphoneComponent } from './products/headphone/headphone.component';
import { AdminComponent } from './admin/admin.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { RegisterComponent } from './register/register.component';
import { UmobileComponent } from './uproducts/umobile/umobile.component';
import { UlaptopComponent } from './uproducts/ulaptop/ulaptop.component';
import { UheadphoneComponent } from './uproducts/uheadphone/uheadphone.component';
import { UproductsComponent } from './uproducts/uproducts.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},  
{path:'home',component:HomeComponent},
{path:'cart',component:CartComponent},
{path: 'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'products',children:[
  {path:'',component:ProductsComponent},
  {path:'mobile',component:MobileComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'headphone',component:HeadphoneComponent}
]},
{path:'admin',component:AdminComponent},
{path:'adhome',component:AdhomeComponent},
{path:'form',component:FormComponent},
{path:'form1',component:Form1Component},
{path:'form2',component:Form2Component},
{path:'ahome',component:AhomeComponent},
{path:'aabout',component:AaboutComponent},
{path:'aacart',component:AacartComponent},
{path:'uproducts',children:[
{path:'',component:UproductsComponent},
{path:'umobile',component:UmobileComponent},
{path:'ulaptop',component:UlaptopComponent},
{path:'uheadphone',component:UheadphoneComponent},]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
