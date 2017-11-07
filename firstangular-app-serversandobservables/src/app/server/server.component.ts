import {Component} from '@angular/core';

@Component({
selector: "app-server",
templateUrl :"./server.component.html"
})
export class Servercomponent{
title : string ="hi server";
ID : number=1;
servercolor:string='red';
gettitle(){
    return this.title ;
}
constructor(){
if(Math.random()*10>5)
this.servercolor= 'red';
else this.servercolor= 'blue';

}


givecolor(){
    console.log(this.servercolor);
return this.servercolor; 
}
}