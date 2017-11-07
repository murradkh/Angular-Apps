import { Component,OnInit } from '@angular/core';
import {Httpservice} from './service-http';
import {Response} from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private appname:string="";
  constructor(private httpservice:Httpservice){
    this.httpservice.getappname().subscribe( (data:any)=>{
this.appname=data;

    });
  }
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onsave(){
    this.httpservice.sendtotheserver(this.servers).subscribe((Response) =>{
console.log(Response);
    },
  (error:Error)=>{
console.log(error);
  });
  }
  onGet(){
    this.httpservice.getfromserver().subscribe((data:any)=>{
console.log(data);
    },(error:Error)=>{
console.log(error);
    });
  }
}
