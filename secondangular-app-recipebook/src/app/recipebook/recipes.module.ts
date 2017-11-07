import {NgModule} from '@angular/core';
import {RecipebookComponent} from './recipebook.component';
import {RecipestartComponent} from './recipestart/recipestart.component';
import {RecipelistComponent}from './recipelist/recipelist.component';
import {RecipedetailComponent} from './recipedetail/recipedetail.component';
import {RecipeEditComponent}from './recipe-edit/recipe-edit.component';
import {RecipeitemComponent} from './recipelist/recipeitem/recipeitem.component';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Reciperoutingmodule } from './recipes-routing.module';
@NgModule({
declarations:[
    RecipebookComponent,
    RecipedetailComponent,
    RecipeEditComponent,
    RecipelistComponent,
    RecipestartComponent,
    RecipeitemComponent,
],
imports:[
    CommonModule,
    Reciperoutingmodule,
    FormsModule
]
})
export class RecipesModule{

}