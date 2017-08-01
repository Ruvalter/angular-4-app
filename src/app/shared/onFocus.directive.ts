import {
  Directive,
  Input,
  HostListener,
  HostBinding
} from '@angular/core';


@Directive ({
  selector: '[appOnFocus]'
})

export class OnFocusDirective {

  @HostBinding('class.selection') isSelected = false;

  @HostListener('click') toggleOpen () {
    this.isSelected = !this.isSelected;
  }
  // @HostListener('focusout') focusOut () {
  //   this.isOpen = false;
  // }

}