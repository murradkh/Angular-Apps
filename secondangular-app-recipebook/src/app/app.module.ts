import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { shoppinglistservice} from './shoppinglist/shoppinglist.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Recipeservice } from '././recipebook/Recipe.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanDeactivateGuard }from './shoppinglist/shoppeing-edit/can-deactivate-guard.service';
import { Httpservice} from './service-http';
import { HttpModule} from '@angular/http';
import { authnicationservice } from './auth/authincation-service';
import { RoutingModule } from './app-routing.module';
import { authModule } from './auth/auth.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    authModule,
    RoutingModule,
  ],
  providers: [shoppinglistservice,CanDeactivateGuard,Recipeservice,Httpservice,authnicationservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
