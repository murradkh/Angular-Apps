import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private actrou:ActivatedRoute) { 
  }

  ngOnInit() {
    this.user={id:this.actrou.snapshot.params['id'],name:this.actrou.snapshot.params['name'] };
    this.actrou.params.subscribe(
      (params:Params) =>{
        this.user={id:params['id'],name:params['name'] };
        
    });
  }

}
