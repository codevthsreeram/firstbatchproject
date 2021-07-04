import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[customStyle]'
})

export class CustomStyleDirective {
    constructor(private el: ElementRef) {

    }
    @HostListener('mouseenter') mouseenter() {
        this.el.nativeElement.style.color = 'red';
    }
    @HostListener('mouseleave') mouseleave() {
        this.el.nativeElement.style.color = 'black';
    }
}