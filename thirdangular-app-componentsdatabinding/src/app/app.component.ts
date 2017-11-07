import { Component,Input } from '@angular/core';
import { ServeElementComponent} from './serve-element/serve-element.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      serverElements:{type:string,name:string,content:string}[] = [{type:"server",name:"test",content:"saf"}];

constructor(){
  
}
onAddServer(serverDate:{type:string,name:string,content:string}) {
    this.serverElements.push({
      type: serverDate.type,
      name: serverDate.name,
      content: serverDate.content
    });
  }

  onAddBlueprint(blueprint:{type:string,name:string,content:string}) {
    this.serverElements.push({
      type: blueprint.type,
      name: blueprint.name,
      content: blueprint.content
    });
  }
 
}
