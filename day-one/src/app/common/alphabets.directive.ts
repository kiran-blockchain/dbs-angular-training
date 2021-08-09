import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[dbsAlphabetsOnly]'
})
export class AlpahbetsDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    @Input()
    expression: any
    
    ngOnInit() {

    }
    @HostListener('keydown', ['$event'])
    handleKeyDown(evt: any) {
        console.log(evt.keyCode);
        let regex: any;
        if (this.expression != '') {
            regex = new RegExp(this.expression);
            if (!regex.test(evt.key)) {
                evt.preventDefault();
            }
        }

    }

    //Event Capturing will be done with the hostlistener
}