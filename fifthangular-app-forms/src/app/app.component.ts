import { Component,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') private form:NgForm;
private genders:string[]=['male','female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onsubmit(){

console.log(this.form);
this.form.reset();
  }

}
