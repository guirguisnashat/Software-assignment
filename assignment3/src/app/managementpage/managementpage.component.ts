import { Component, OnInit } from '@angular/core';
import { SupplierService } from "../services/supplier.service";
import { Supplier } from "../sharred/Supplier";

@Component({
  selector: 'app-managementpage',
  templateUrl: './managementpage.component.html',
  styleUrls: ['./managementpage.component.scss']
})
export class ManagementpageComponent implements OnInit {

  suppliers:Supplier[]=[];

  constructor(private supplierservice:SupplierService) { }

  ngOnInit(): void {
    this.suppliers=this.supplierservice.getsupliers();

  }

}
