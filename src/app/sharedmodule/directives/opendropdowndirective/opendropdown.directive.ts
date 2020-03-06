import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOpendropdown]'
})
export class OpendropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') clickToActivateMenu() {
    const selecteditem = this.el.nativeElement;
    const menuitem = this.el.nativeElement.parentElement.querySelector('.open');
    if (menuitem) {
      this.renderer.removeClass(menuitem, 'open');
    } else {
      this.renderer.addClass(selecteditem, 'open');
    }
  }
}
