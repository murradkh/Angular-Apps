import { Component, OnInit } from '@angular/core';
import {Recipeservice} from './Recipe.service';
import {authnicationservice}from './../auth/authincation-service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  
})
export class RecipebookComponent implements OnInit {
  public  saved:boolean=false;
  constructor(private recipeservice:Recipeservice,public  authservice:authnicationservice) { }

  ngOnInit() {
    this.recipeservice.saved.subscribe(()=>{
this.saved=true;
setTimeout(()=>{
  this.saved=false;  
},3000);
    })

  }
 
 
}
