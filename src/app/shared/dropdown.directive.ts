import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') ddOpen: boolean = false;

  @HostListener('document:click', ['$event']) click(eventData: Event) {
    this.ddOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.ddOpen : false;
  }

  constructor(private elRef:ElementRef) {}
}