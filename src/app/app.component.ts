import { Component} from '@angular/core';

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
x;
y;
left_pos;
top_pos;    
tags=[{
    name:"Lorem",
    link:"http://www.link.com",
    weight:'10'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'2'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'4'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'6'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'4'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'11'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'7'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'5'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'1'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'5'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'3'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'10'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'6'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'8'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'4'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'3'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'3'
},

{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'5'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'3'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'7'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'3'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'10'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'2'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'4'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'6'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'4'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'11'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'10'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'5'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'1'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'5'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'3'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'10'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'6'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'8'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'4'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'3'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'10'
},

{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'5'
},{
    name:"Lorem",
    link:"http://www.link.com",
    
    weight:'3'
},{
    name:"Ipsum",
    link:"http://www.link.com",
    
    weight:'8'
},
{
    name:"Dolor",
    link:"http://www.link.com",
    
    weight:'7'
},
{
    name:"siet",
    link:"http://www.link.com",
    
    weight:'3'
}];

contWidth(){
    return this.container_specs.width+'px';
}
/*contHeight(){
    return this.container_specs.height+'px';
}

*/
  private coordinates(event: MouseEvent):void {
        this.x = event.clientX;
        this.y = event.clientY;
    }
    hoverd=false;    
hoverEle(){
    this.hoverd=true;
}  
leaveEle(){
    this.hoverd=false;
}     
}
