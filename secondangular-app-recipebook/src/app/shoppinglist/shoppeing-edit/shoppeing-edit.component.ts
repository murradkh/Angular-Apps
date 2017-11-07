
import { Component, OnInit,ViewChild } from '@angular/core';
import {shoppinglistservice} from '../shoppinglist.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shoppeing-edit',
  templateUrl: './shoppeing-edit.component.html',
  styleUrls: ['./shoppeing-edit.component.css']
})
export class ShoppeingEditComponent implements OnInit {
   @ViewChild('f') private  form:NgForm;
   public  nam:string;
   public amoun:number;
   public currentmode:string="Add";
  constructor(private shoppingservice:shoppinglistservice) { 

  }
    ngOnInit(){
    this.shoppingservice.testingevent.subscribe( () => {
      this.shoppingservice.currentnameininput=this.nam;
      this.shoppingservice.currentamountininput=this.amoun;
    
    });
    this.shoppingservice.changedmode.subscribe((id:number) =>{
this.currentmode="Update";
const ingrediant=this.shoppingservice.getingrediant(id);

this.nam=ingrediant.name;
this.amoun=ingrediant.num; 

    });
  }


  onsubmit(){
    if(this.currentmode=="Add"){
   this.shoppingservice.addingrediant({name:this.nam,amount:this.amoun});
    this.form.reset();
    }else{
  this.shoppingservice.Updateingrediant();
this.currentmode="Add";
this.form.reset();
}
  
}
deleteingrediant(){
  this.currentmode="Add";  
  this.shoppingservice.deleteingrediant();
  this.form.reset();
  
}
clearingrediants(){
  this.currentmode="Add";  
  this.form.reset();
  
}


}
