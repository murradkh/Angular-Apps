
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist.component';
import { CanDeactivateGuard } from './shoppeing-edit/can-deactivate-guard.service';

const routes:Routes=[
{path:"",component:ShoppinglistComponent,canDeactivate:[CanDeactivateGuard]},
// {path:"**",redirectTo:'pagenotfound'}
];
@NgModule({
    declarations: [],
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class shoppinglistrouting{

}