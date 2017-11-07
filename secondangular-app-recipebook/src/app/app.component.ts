//explantion on how angular page work:in the first lectures,he told us thats we always in the same page,so we can move between different pages without reloding page. so i asked myself, is thats mean thats when we move between pages we acting like ajax method in the background ,or all the pages is in the client , the answer is like alax told us , when we need something from server we do it in the background,only when we need something, becouse the client getting most of the pages of our application.
import { Component,AfterViewChecked,OnInit } from '@angular/core';
import {shoppinglistservice} from './shoppinglist/shoppinglist.service';
import * as firebase from 'firebase';
import{authnicationservice} from './auth/authincation-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private shopservice:shoppinglistservice,private authservice:authnicationservice){

  firebase.initializeApp({
    apiKey: "AIzaSyD9X86VWPwi4W2vDHNeo1Ehm7gHdiZuR5w",
    authDomain: "recipe-book-e4b5a.firebaseapp.com",
  });
}
ngOnInit(){

  
 
}



}
