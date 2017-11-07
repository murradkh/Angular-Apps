import { Component, OnInit,Input } from '@angular/core';
import{Httpservice} from '../service-http';
import {authnicationservice} from '../auth/authincation-service';
import {Recipeservice} from '../recipebook/Recipe.service';
import{ingrediant} from '../ingrediant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() newclass:boolean=false;

  constructor(private httpservice:Httpservice,
    private rercipeservice:Recipeservice,
    private authservice:authnicationservice
  ) { 

  }
  ngOnInit() {
this.authservice.onlogout();
  }
 onsave(){
this.httpservice.saveData().subscribe(()=>{
  this.rercipeservice.saved.emit();
});
this.newclass=false;
 }
 onfetch(){
this.httpservice.fetchData().subscribe((data:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}[])=>{
 for(let item of data){
  if(!item.ingrediants){
item.ingrediants=[];
   }
  }
 this.rercipeservice.setrecipelist(data);

});
  this.newclass=false;  
 }
 isauthenicated(){
   
   
  return this.authservice.isauthenicated();
 }
 onlogout(){
   this.authservice.onlogout();
 }
 


}
