import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {RecipeitemComponent} from './recipeitem/recipeitem.component';
import {Recipeservice} from '../Recipe.service';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
Recipelist:{name:string,imagepath:string,details:string}[];
@Output() onclick=new EventEmitter<object>();
  constructor(private recipeservice:Recipeservice) {
   }
  ngOnInit() {
this.Recipelist=this.recipeservice.getrecipelist();
this.recipeservice.event.subscribe(()=>{
  this.Recipelist=this.recipeservice.getrecipelist();
  
});
  }


  

}
