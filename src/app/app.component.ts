import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
private event: MouseEvent;    
container_specs={
    width:500,
    height:500
} 
x;
y;
left_pos;
top_pos;    
tags=[{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
},{
    name:"FC Barcelona",
    link:"http://www.fcb.com",
    color:"#036295"
},{
    name:"Manchester United",
    link:"http://www.manu.com",
    color:"#d6042c"
}];

contWidth(){
    return this.container_specs.width+'px';
}
contHeight(){
    return this.container_specs.height+'px';
}


  private coordinates(event: MouseEvent):void {
        this.x = event.clientX;
        this.y = event.clientY;
    }
    
}
