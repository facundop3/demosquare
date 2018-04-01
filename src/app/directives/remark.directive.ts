import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
  selector: '[testremark]'
})
export class RemarkDirective implements OnInit{
  constructor( private elRef:ElementRef, private renderer: Renderer2 ){}
  // @Input('testremark') premiun : string ='';
  @Input('testremark') premiun :boolean;
  ngOnInit(){
    if(this.premiun){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
