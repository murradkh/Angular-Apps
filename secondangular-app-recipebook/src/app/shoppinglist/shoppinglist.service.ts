import {EventEmitter,ElementRef} from '@angular/core';
import {ingrediant} from '../ingrediant';
import { Subject} from 'rxjs/Subject'
export class shoppinglistservice  {

private  ingrediants:ingrediant[]=[];
public event:Subject<void>;
public currentnameininput:string="";
public currentamountininput:number;
public testingevent:EventEmitter<void>;
public changedmode: EventEmitter<number>;
public currentclicked:number;
constructor(){
    this.event=new Subject<void>();
    this.testingevent=new EventEmitter<void>();
    this.changedmode=new EventEmitter<number>();
    this.ingrediants.push(new ingrediant("banana",2));
              this.ingrediants.push(new ingrediant("apple",2)); 
}


getlist(){
        return this.ingrediants.slice();
}
getingrediant(id:number){
return this.ingrediants[id];
}

addingrediant(event:{name:string,amount:number}){
    this.ingrediants.push(new ingrediant(event.name,event.amount));    
    this.event.next();
    
}
addtoshoppinglist(ing:ingrediant[]){
    
    for(let i=0;i<ing.length;i++){
        this.ingrediants.push(ing[i]);        
    }
}
Updateingrediant(){
this.testingevent.emit();
this.ingrediants[this.currentclicked].name=this.currentnameininput;
this.ingrediants[this.currentclicked].num=this.currentamountininput;
this.event.next();
}
deleteingrediant(){
    if(this.currentclicked!=undefined){
    this.ingrediants.splice(this.currentclicked,1);
this.event.next();
    }

}




}