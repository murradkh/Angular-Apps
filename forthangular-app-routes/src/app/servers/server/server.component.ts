import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute,Params,Router} from '@angular/router'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private route:Router,private serversService: ServersService,private activeroute:ActivatedRoute){ 

  }

  ngOnInit() {

  this.server = this.serversService.getServer(parseInt(this.activeroute.snapshot.params['id']));
  this.activeroute.params.subscribe(
(parms:Params) => {
  this.server = this.serversService.getServer(parseInt(parms['id']));
  
}
  );
  }
  onedit(){
this.route.navigate(['edit'],{relativeTo:this.activeroute,queryParams:{allowedit:this.activeroute.snapshot.queryParams['allowedit']}});
  }

}
