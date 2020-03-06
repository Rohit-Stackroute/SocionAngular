import { Directive, HostBinding, HostListener, ElementRef, Input, OnInit, OnChanges, SimpleChange, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuactive]'
})
export class MenuactiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  @HostListener('click') clickToActivateMenu() {
    const selecteditem = this.el.nativeElement;
    const menuitem = this.el.nativeElement.parentElement.querySelector('.selected');
    this.renderer.removeClass(menuitem, 'selected');
    this.renderer.addClass(selecteditem, 'selected');

  }


}
