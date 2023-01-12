import { Directive, Input, Output, EventEmitter, ElementRef, HostListener, NgModule, OnInit } from '@angular/core';
import { fromEvent, take } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements OnInit {

  @Output() clickOutside = new EventEmitter<void>();
  captured = false;
  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClick(target:any) {
    if (!this.captured) {
      return;
    }
    else if(!this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
  ngOnInit(): void {
    fromEvent(document, "click", { capture: true })
    .pipe(take(1))
    .subscribe(() => (this.captured = true));
  }
}

  


@NgModule({
  declarations:[
    ClickOutsideDirective
  ],
  exports:[ClickOutsideDirective]
})
export class clickOutsideDirectiveModule{}

