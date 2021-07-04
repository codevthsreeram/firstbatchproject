import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CustomValidate]'
})
export class CustomValidateDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onkeyup() {
    let length = this.el.nativeElement.value.length;
    if (length > 5) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
    else {
      this.el.nativeElement.style.backgroundColor = null;
    }
  }
}
