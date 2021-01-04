import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfopageComponent } from "../app/infopage/infopage.component";
import { HomeComponent } from "../app/home/home.component";
import { ManagementpageComponent } from "../app/managementpage/managementpage.component";
import { ProductdetailComponent } from "../app/productdetail/productdetail.component";
import { LoginComponent } from "../app/login/login.component";

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'manage',     component: ManagementpageComponent },
  { path: 'info', component: InfopageComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


