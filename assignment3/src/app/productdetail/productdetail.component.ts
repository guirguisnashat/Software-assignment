import { Component, OnInit } from '@angular/core';
import { Supplier } from "../sharred/Supplier";
import { SupplierService } from "../services/supplier.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  supplier:Supplier= {
    id:'',
    name:'',
    email:'',
    address:'',
    rating:0,
    description:'',
    nation:'',
    phone:'',
    websitedomain:'',
    password:'',
    image:'',
    products:[
        {
            description:'',
            name:'',
            id:'',
            image:''
        },
        {
            description:'',
            name:'',
            id:'',
            image:''
        },
        {
            description:'',
            name:'',
            id:'',
            image:''
        }]};
  href:string='';
  constructor(private supplierservice:SupplierService,private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    this.href=this.href.split('/')[this.href.split('/').length-1];
    this.supplier=this.supplierservice.getonesupplier(this.href);
  }

}
