import {ingrediant} from '../ingrediant';
import {EventEmitter,Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class Recipeservice{

public readonly saved=new EventEmitter<void>();
private Recipelist:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}[]=[
 {name: "burger",imagepath:"../../assets/BB_WHOPPER-v1.png",details:"delicous burger",ingrediants:[new ingrediant("meat",2),new ingrediant("tomato",1)]},
 {name:"pizza",imagepath:"../../assets/cheese-corn-balls-recipe.jpg",details:"new recipe,just taste it!",ingrediants:[new ingrediant("apples",4)]},
 {name:"cheese-corn",imagepath:"../../assets/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg",details:"what else you need to say?",ingrediants:[new ingrediant("bread",3),new ingrediant("cheese",6)]}
];
public readonly event:EventEmitter<void>=new EventEmitter<void>();
constructor(private router:Router){

}


getrecipelist(){
    return this.Recipelist.slice();   
}
setrecipelist(newrecipelist:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}[]){
    // console.log(newrecipelist);
    
    this.Recipelist=newrecipelist;
    this.event.emit();
}


addnewrecipe(newrecipe:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}){
    this.Recipelist.push(newrecipe);
    this.event.emit();
}



findrecipe(name:string){
    for(let item of this.Recipelist){
    if(item.name==name){

        return item;
    }
    }
    return null;
     }
deleterecipe(item:{name:string,imagepath:string,details:string,ingrediants:ingrediant[]}){
    for(let i=0;i<this.Recipelist.length;i++){
        if(this.Recipelist[i]===item){
    this.Recipelist.splice(i,1);
    this.event.emit();  
     this.router.navigate(['/recipebook']);
}
}
    }


}