import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx'
import {Observable} from 'rxjs';
@Injectable()
export class Httpservice{

constructor(private http:Http){

}
sendtotheserver(service:any){
let header=new Headers({'Content-Type':'application/json'});
return this.http.put('https://angulartest1-b1512.firebaseio.com/data.json',service,{headers:header});
}
getfromserver(){
    return this.http.get('https://angulartest1-b1512.firebaseio.com/data.json').map(
(response:Response) =>{
return response.json();
}).catch((error:Response)=>{
    return Observable.throw('there is something wrong');
});
}
getappname(){
 return this.http.get('https://angulartest1-b1512.firebaseio.com/appname.json').map(
    (response:Response)=>{
return response.json();
     }
 );
}
}