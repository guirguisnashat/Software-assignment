


import { SupplierService } from "./services/supplier.service";
import { AdminService } from "./services/admin.service";
import { ClientService } from "./services/client.service";
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatGridListModule } from '@angular/material/grid-list';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from "./app-routing.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { HttpClientModule } from "@angular/common/http";


import { MatListModule } from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';



import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfopageComponent } from './infopage/infopage.component';
import { ManagementpageComponent } from './managementpage/managementpage.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InfopageComponent,
    ManagementpageComponent,
    LoginComponent,
    ProductdetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule, 
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [
    SupplierService,
    AdminService,
    ClientService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
