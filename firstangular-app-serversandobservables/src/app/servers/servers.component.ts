import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

turnon:boolean=true;
clickedcheck:string="server not Added";
servername:string="";
servercreated:boolean=false;
serversarray=['server1','server2'];
  constructor() {
setTimeout(() => {
  
  this.turnon=!this.turnon;
  
}, 4000);
   }

  ngOnInit() {

  }
  addedbuttonclicked(){
 this.servercreated=true;
this.clickedcheck="server Added";
this.serversarray.push(this.servername);
  }
  changeservername(event:any){
   
this.servername=event.target.value;
  }

}
