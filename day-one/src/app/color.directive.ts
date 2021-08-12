import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dbsColorTest]'
})
export class ColorDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor='red';
   }

}
