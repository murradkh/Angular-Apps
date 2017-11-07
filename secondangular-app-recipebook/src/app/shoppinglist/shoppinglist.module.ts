import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppeingEditComponent } from './shoppeing-edit/shoppeing-edit.component';
import { shoppinglistrouting } from './shoppinglist-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ShoppinglistComponent,
                   ShoppeingEditComponent],
    imports: [CommonModule
        ,shoppinglistrouting
        ,FormsModule,
    ],
})

export class Shoppinglistmodule {


}