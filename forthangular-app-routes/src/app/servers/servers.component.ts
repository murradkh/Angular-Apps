import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private route:Router,private relativeroute:ActivatedRoute) { 

  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    
  }
  onclick(){
    //this way when i want to add to current URL more elements
// this.route.navigate(['servers'],{relativeTo:this.relativeroute});
this.route.navigate(['/servers']);  
}

}
