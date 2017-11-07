import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Servercomponent} from './server/server.component';
import { AppComponent } from './app.component';
import {ServersComponent} from './servers/servers.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
Servercomponent,
ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
