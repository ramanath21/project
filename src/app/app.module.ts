import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule }from '@angular/common/http';
import { NeedDataService } from './need-data.service';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AhomeComponent } from './ahome/ahome.component';

import { AacartComponent } from './aacart/aacart.component';
import { AaboutComponent } from './aabout/aabout.component';
import { AdminComponent } from './admin/admin.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { HeadphoneComponent } from './products/headphone/headphone.component';
import { RegisterComponent } from './register/register.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { UproductsComponent } from './uproducts/uproducts.component';
import { UmobileComponent } from './uproducts/umobile/umobile.component';
import { UlaptopComponent } from './uproducts/ulaptop/ulaptop.component';
import { UheadphoneComponent } from './uproducts/uheadphone/uheadphone.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
   
    ProductsComponent,
  
    LoginComponent,
    CartComponent,
    
   
    AhomeComponent,
    AaboutComponent,
    AacartComponent,
    AdminComponent,
    MobileComponent,
    LaptopComponent,
    HeadphoneComponent,
    RegisterComponent,
    AdhomeComponent,
    FormComponent,
    Form1Component,
    Form2Component,
    UproductsComponent,
    UmobileComponent,
    UlaptopComponent,
    UheadphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
