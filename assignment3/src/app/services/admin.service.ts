import { Injectable } from '@angular/core';
import { Admin,admin } from "../sharred/Admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getadmin():Admin{
    return admin;
  }

}
