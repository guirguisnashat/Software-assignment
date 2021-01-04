import { Component, OnInit } from '@angular/core';
import { SupplierService } from "../services/supplier.service";
import { Supplier } from "../sharred/Supplier";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suppliers:Supplier[]=[];

  constructor(private suppierservice:SupplierService) { }

  ngOnInit(): void {

    this.suppliers=this.suppierservice.getsupliers();
  }

  

}
