import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanDeactivateGuard}from './servers/edit-server/can-deactivate-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanDeactivate } from '@angular/router';

const routes:Routes=[
{path:"",component:HomeComponent},
{path:'users',component:UsersComponent, children:[
{path:":id/:name",component:UserComponent}
]},
{path:"servers",component:ServersComponent,children:[
{path:":id",component:ServerComponent},
{path:":id/edit",component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
]},
{path:"pagenotfound",component:PagenotfoundComponent},
{path:"**",redirectTo:'/pagenotfound'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ServersService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
