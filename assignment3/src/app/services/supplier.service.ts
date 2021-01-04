import { Injectable } from '@angular/core';
import { SUPPLIERS,Supplier } from "../sharred/Supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() { }

  getsupliers():Supplier[]{
    return SUPPLIERS;
  }

  getonesupplier(id:string):Supplier{
    return SUPPLIERS.filter((supplier)=>(supplier.id===id))[0];
  }
}
