import {Directive,ElementRef,Input, HostListener,AfterViewInit} from '@angular/core';
import{positionXArray,positionYArray} from './global';
@Directive({
        selector:'[name]' ,
  /*  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }*/
})
export class MainDirective implements AfterViewInit {  
constructor(private el:ElementRef){
    
}   
hoverd:boolean;    
@Input()
@HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.opacity=1;
    this.el.nativeElement.style.transform='scale(1.2)';
}  
@HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.opacity="";
this.el.nativeElement.style.transform='scale(1)';
} 
ngAfterViewInit() {
   var weight=this.el.nativeElement.getAttribute('data-weight');
if(weight>=2){
     this.el.nativeElement.style.fontSize="18px";
    // this.el.nativeElement.style.fontWeight="400";
}
    if(weight>=4){
     this.el.nativeElement.style.fontSize="20px";
        
    // this.el.nativeElement.style.fontWeight="600";
}   
    if(weight>=6){
     this.el.nativeElement.style.fontSize="24px";
    
   this.el.nativeElement.style.color="#21ced4";    
}
      if(weight>=10){
     this.el.nativeElement.style.fontSize="28px";
          
   this.el.nativeElement.style.color="#5fd0b5";
   //  this.el.nativeElement.style.fontWeight="900";
}
}
   
}