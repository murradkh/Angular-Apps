import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { CanDeactivateGuard } from './shoppinglist/shoppeing-edit/can-deactivate-guard.service';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes:Routes=[
    {path:"",redirectTo:'Home',pathMatch:'full'}, 
    {path:'Home',component:HomepageComponent},
    {path:'recipebook',loadChildren:'./recipebook/recipes.module#RecipesModule'},
    {path:"pagenotfound",component:PagenotfoundComponent},
    {path:'shoppinglist',loadChildren:'./shoppinglist/shoppinglist.module#Shoppinglistmodule'},    
    {path:"**",redirectTo:'pagenotfound'}
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}),
    ],
    exports: [RouterModule]

})
export class RoutingModule{
  
    

}