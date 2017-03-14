import { Component} from '@angular/core';
import { Tags} from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
private event: MouseEvent;    
container_specs={
    width:500
}    
tags=Tags;

contWidth(){
    return this.container_specs.width+'px';
}

hoverd=false;    
hoverEle(){
    this.hoverd=true;
}  
leaveEle(){
    this.hoverd=false;
}     
}
