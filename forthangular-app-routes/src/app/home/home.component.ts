import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServersComponent} from '../servers/servers.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onload(){
    //some calculations
this.router.navigate(['/servers',1,'edit'],{queryParams:{'allowedit':2}});
  }

}
