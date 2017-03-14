import {Directive,ElementRef,Input, HostListener,AfterViewInit} from '@angular/core';

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
offset_gen(){
    return Math.random()*10+'px';
}    
ngAfterViewInit() {
    this.el.nativeElement.style.marginTop=this.offset_gen();
    this.el.nativeElement.style.marginBottom=this.offset_gen();
    this.el.nativeElement.style.marginLeft=this.offset_gen();
    this.el.nativeElement.style.marginRight=this.offset_gen();
   var weight=this.el.nativeElement.getAttribute('data-weight');
if(weight>=2){
     this.el.nativeElement.style.fontSize="16px";
     this.el.nativeElement.style.verticalAlign="bottom";
}
    if(weight>=4){
     this.el.nativeElement.style.fontSize="24px";
        
   this.el.nativeElement.style.color="#feceab";    
}   
    if(weight>=6){
     this.el.nativeElement.style.fontSize="26px";
    
   this.el.nativeElement.style.color="#21ced4";    
}
      if(weight>=10){
         this.el.nativeElement.style.fontSize="34px";
         this.el.nativeElement.style.verticalAlign="top";     
         this.el.nativeElement.style.color="#9de0ad";
  
}
}
   
}