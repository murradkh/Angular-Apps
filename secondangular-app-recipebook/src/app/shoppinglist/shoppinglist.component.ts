import { Component, OnInit,OnDestroy } from '@angular/core';
import {shoppinglistservice } from './shoppinglist.service';
import {ingrediant} from '../ingrediant';
import {Subscription} from 'rxjs/Subscription'
import {CanComponentDeactivate,CanDeactivateGuard} from './shoppeing-edit/can-deactivate-guard.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit,OnDestroy,CanComponentDeactivate {
  public  ingrediants:ingrediant[];  
  private  subsription:Subscription;
  private currentclicked:number;  
  constructor(private shoppingservice:shoppinglistservice) {

  }
  ngOnInit() {
   this.ingrediants= this.shoppingservice.getlist();
  this.subsription=this.shoppingservice.event.subscribe( () => {
  this.currentclicked=undefined;
  this.ingrediants= this.shoppingservice.getlist();
});
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subsription.unsubscribe();
  }
   canDeactivate(){
this.shoppingservice.testingevent.emit();
if(this.shoppingservice.currentnameininput!=undefined || this.shoppingservice.currentamountininput!=undefined){
  {
    this.shoppingservice.currentnameininput=undefined;
    this.shoppingservice.currentamountininput=undefined;
  return window.confirm("Discard changes?");
  }

}else return true;

  }
  changeclass(i:number){
    this.currentclicked=i;
    this.shoppingservice.currentclicked=i;
   this.shoppingservice.changedmode.emit(i);

  }
  
}
