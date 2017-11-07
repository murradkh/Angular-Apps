import { Component, OnInit,Input} from '@angular/core';
import { Recipeservice} from '../../Recipe.service';
import {ingrediant } from '../../../ingrediant';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
@Input() itemobject:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]};
  constructor(private route:Router,private active:ActivatedRoute,private recipeservice:Recipeservice) { }

  ngOnInit() {
    
  }

}
