import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ingrediant } from '../../ingrediant';
import { Recipeservice } from '../Recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') private form: NgForm;
  public recipeitem: { name: string, imagepath: string, details: string, ingrediants: ingrediant[] } =
  { name: "", imagepath: "", details: "", ingrediants: [] };
  public ingrediants: ingrediant[] = [];
  private newrecipemode: boolean = false;
  constructor(private recipeservice: Recipeservice,
    private activeroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.activeroute.snapshot.params['name'] != undefined) {
      this.recipeitem = this.recipeservice.findrecipe(this.activeroute.snapshot.params['name']);
      this.ingrediants = this.recipeitem.ingrediants.slice();
    } else {
      this.newrecipemode = true;
    }

  }
  onsubmit() {

    this.recipeitem.name = this.form.value.name;
    this.recipeitem.imagepath = this.form.value.image;
    this.recipeitem.details = this.form.value.description;
    this.recipeitem.ingrediants = [];

    for (let ingrediant of this.ingrediants) {
      this.recipeitem.ingrediants.push(ingrediant);
    }
    if (this.newrecipemode == true) {
      this.recipeservice.addnewrecipe(this.recipeitem);
      this.router.navigate(['../'], { relativeTo: this.activeroute });
    } else this.router.navigate(['../../', this.recipeitem.name], { relativeTo: this.activeroute });
  }
  deleteingrediant(num: number) {

    this.ingrediants.splice(num, 1);
  }
  addingrediant() {
    this.ingrediants.push({ name: undefined, num: undefined });
  }

}

