import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordure]',
})
export class BordureDirective {
  @Input('appBordure')
  public color: string = 'blue';

  private oldBorder: string;

  constructor(private el: ElementRef) {
    this.oldBorder = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.color === 'SUCCESS') {
      this.el.nativeElement.style.border = 'solid green 2px';
    } else if (this.color === 'WARNING') {
      this.el.nativeElement.style.border = 'solid orange 2px';
    } else if (this.color === 'ERROR') {
      this.el.nativeElement.style.border = 'solid red 2px';
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.border = this.oldBorder;
  }
}
