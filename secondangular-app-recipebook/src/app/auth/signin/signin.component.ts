import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {authnicationservice} from '../authincation-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice:authnicationservice) { 

  }

  ngOnInit() {
  }
onsubmit(form:NgForm){
  this.authservice.sigin(form.value.mail,form.value.password);
}
}
