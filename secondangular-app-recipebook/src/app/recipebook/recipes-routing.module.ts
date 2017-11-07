
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook.component';
import { RecipestartComponent } from './recipestart/recipestart.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';


const routes: Routes = [
    {
        path: "", component: RecipebookComponent, children: [
            { path: "", component: RecipestartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":name", component: RecipedetailComponent },
            { path: ":name/edit", component: RecipeEditComponent },
            { path: "**", redirectTo: '/pagenotfound' }
        ]
    }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})

export class Reciperoutingmodule {


}