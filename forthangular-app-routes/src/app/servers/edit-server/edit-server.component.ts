import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute} from '@angular/router';
import {CanDeactivateGuard,CanComponentDeactivate} from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedit:boolean=false;
  updated:boolean=false;
  constructor(private serversService: ServersService,private activeroute:ActivatedRoute) { }

  ngOnInit() {
    
    this.server = this.serversService.getServer(parseInt(this.activeroute.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    if(this.activeroute.snapshot.queryParams['allowedit']=='false')
    this.allowedit=false;
    else     this.allowedit=true;
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  this.updated=true;
  }
  canDeactivate() {
    if(this.updated==true)
      return true;
    // if the editName !== this.user.name
    if (this.serverName !== this.server.name || this.serverStatus !== this.server.status) {
      return window.confirm('Discard changes?');
    }

    return true;
}

}
