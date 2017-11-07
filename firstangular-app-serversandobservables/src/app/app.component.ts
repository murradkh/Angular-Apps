import { Component,OnInit } from '@angular/core';
import {Servercomponent} from './server/server.component';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(){

const firstobservable=Observable.create( (observer:Observer<string>) => {
setInterval(()=>{
  observer.next("first package");  
},3000);  
setTimeout(()=> {
  observer.next("first package");    
  observer.complete();
}, 6000);

});
firstobservable.subscribe( (data:string) => {
console.log(data);
});

  }

}
