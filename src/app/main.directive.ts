import {Directive,ElementRef,Input,AfterContentInit} from '@angular/core';
import{positionXArray,positionYArray} from './global';
@Directive({
        selector:'[name]'    
})
export class MainDirective{
constructor(private el:ElementRef){
    
}   
cloud_pos(lp,tp){
    this.el.nativeElement.style.top=tp;  
    this.el.nativeElement.style.left=lp;  
}
private posX(){
    return Math.random()*500
} 
private posY(){
    return Math.random()*500
}       
ngAfterViewInit() {
    this.set_position(this.el.nativeElement.style.top);
     console.log(this.el.nativeElement.style.width);
}

set_position(x){
    var offset_width=this.el.nativeElement.offsetWidth/2;
    var offset_height=this.el.nativeElement.offsetHeight/2;
   
 positionXArray.push(offset_width);
    positionYArray.push(offset_height);
console.log(positionXArray+'&'+positionYArray);
    var left_pos=this.posX();
    var left_px=left_pos+'px';
    var top_pos=this.posY();
    var top_px=top_pos+'px';
        if(this.check_overlap(left_pos,top_pos,offset_width,offset_height)){
            this.cloud_pos(left_px,top_px);
        }
        else{
        this.posX();    
        this.posY();    
        this.ngAfterViewInit();
            console.log('sad');
        }
}

check_overlap(x,y,ox,oy){
for(var i=0;i<positionXArray.length;i++){
 /*   if(x>positionXArray[i]+ox&&y>positionYArray[i]+oy){
  //  this.set_position();
         console.log(x);
    console.log(positionXArray[i]+ox) ;   
        */
        return true;
   /*
    }
else{
    return false;
}*/
}
}    
}