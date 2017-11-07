import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Recipeservice} from './recipebook/Recipe.service';
import {authnicationservice} from './auth/authincation-service';
import 'rxjs/Rx';
@Injectable()
export class Httpservice{

constructor(private http:Http,private recipeservice:Recipeservice,private authservice:authnicationservice){

}
saveData(){
   let token= this.authservice.gettoken();
return this.http.put('https://recipe-book-e4b5a.firebaseio.com/data.json?auth='+token,this.recipeservice.getrecipelist());
}
fetchData(){
    let token= this.authservice.gettoken();    
    return this.http.get('https://recipe-book-e4b5a.firebaseio.com/data.json?auth='+token)
    .map((response:Response)=>{
return response.json();
    });
}
}