import { Directive, HostListener, HostBinding } from "@angular/core" ;

@Directive({
  selector: 'li[click-counter]'
})
export class ClickCounterDirective{
    clickCount:number = 0;
    @HostBinding('style.opacity') opacity: number = 0.1;
    @HostListener('click', ['$event.target']) onClick(btn){
      console.log('a', btn, `Clicks number  ${this.clickCount++}`);
      this.opacity+= 0.1;
    };
}
