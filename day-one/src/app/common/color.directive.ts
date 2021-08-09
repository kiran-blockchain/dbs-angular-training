import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[dbscolor]'
})
export class ColorDirective{
     constructor(private el:ElementRef){
        this.el.nativeElement.style.backgroundColor='red';
     }
}