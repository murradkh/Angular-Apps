import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
@Injectable()

export class authnicationservice{
private  token:string=null;
constructor(private router:Router){
 
}

signup(mail:string,password:string){
return firebase.auth().createUserWithEmailAndPassword(mail,password);
    
}
sigin(mail:string,password:string){
return firebase.auth().signInWithEmailAndPassword(mail,password).then((response)=>{
firebase.auth().currentUser.getToken().then((token:string)=>{
    this.token=token;
});
this.router.navigate(['/recipebook']);
      }).catch((error:any)=>{
alert(error.code);
    console.log(error);
      });;
}
gettoken(){
 firebase.auth().currentUser.getToken().then((token:string)=>{
     this.token=token;
 });
 return this.token;
}
isauthenicated(){
    
 
    return this.token!=null ;
  }
  onlogout(){
      firebase.auth().signOut();
      this.token=null;
  }

}