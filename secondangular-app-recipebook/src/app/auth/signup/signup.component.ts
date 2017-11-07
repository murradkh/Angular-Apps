import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {authnicationservice} from '../authincation-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public  code:string="";
  constructor(private authnicationservice:authnicationservice,private router:Router) { }

  ngOnInit() {
  }
  onsubmit(form:NgForm){
let mail=form.value.mail;
let password=form.value.password;
this.authnicationservice.signup(mail,password).then((response)=>{
console.log(response);
  this.router.navigate(['Signin']);
  
}).catch((error:any)=>{
this.code=error.code;

});

    }

}
