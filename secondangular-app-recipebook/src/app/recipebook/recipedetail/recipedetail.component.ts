import { Component, OnInit } from '@angular/core';
import {ingrediant} from '../../ingrediant';
import {shoppinglistservice} from '../../shoppinglist/shoppinglist.service';
import {Recipeservice} from '../Recipe.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { authnicationservice} from '../../auth/authincation-service';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
 recipeitem:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}=null;
open:boolean;
  constructor(private recipeservice:Recipeservice,
              private active:ActivatedRoute,
              private shoservice:shoppinglistservice,
              private route:Router,
              private authservice:authnicationservice) {
              
  }
  ngOnInit() {
    this.open=false;
    // this.recipeitem=this.recipeservice.findrecipe(this.active.snapshot.params['name']);    
this.active.params.subscribe( (parms:Params) =>
{
 this.recipeitem=this.recipeservice.findrecipe(parms['name']);
}
);

if(this.recipeitem==null){
  this.route.navigate(['/pagenotfound']);
}
  }
// clickedontoggle(){
//   if(this.open)
//   this.open=false;
//   else this.open=true;
// }
sendtoshoppinglist(){
  this.open=false;
 this.shoservice.addtoshoppinglist(this.recipeitem.ingrediants);
}
deleterecipe(){
  
  this.recipeservice.deleterecipe(this.recipeitem);

}
}