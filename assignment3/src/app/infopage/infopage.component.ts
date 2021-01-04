import { Component, OnInit } from '@angular/core';
import { ClientService } from "../services/client.service";
import { Client } from "../sharred/Client";
@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss']
})
export class InfopageComponent implements OnInit {

  Clients:Client[]=[];

  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
    this.Clients=this.clientservice.getClients();
  }

}
