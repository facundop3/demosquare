import { Directive, HostListener, HostBinding } from "@angular/core" ;

@Directive({
  selector: 'li[click-counter]'
})
export class ClickCounterDirective{
    clickCount:number = 0;
    @HostListener('click', ['$event.target']) onClick(btn){
      // @HostBinding('style.opacity') opacity: number = 0.1;
      console.log('a', btn, `Clicks number  ${this.clickCount++}`);
      // this.opacity+= 0.2;
    };
}
