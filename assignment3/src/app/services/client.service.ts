import { Injectable } from '@angular/core';
import { Client,CLIENTS } from "../sharred/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients():Client[]{
    return CLIENTS;
  }
}
