import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

@Output() onservercreated=new EventEmitter<{type:string,name:string,content:string}>();
@Output() onblueprintcreated=new EventEmitter<{type:string,name:string,content:string}>();

  constructor() { }

  ngOnInit() {
  }
  onAddServer(name,content){
    console.log(name.value+content.value);
    this.onservercreated.emit({type:"server",name:name.value,content:content.value});
  }
 onAddBlueprint(name,content){
   this.onblueprintcreated.emit({type:"blueprint",name:name.value,content:content.value});
 }

}
