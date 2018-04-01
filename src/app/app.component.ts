import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demosquare';
  blocked= true;
  someText='';
  lat:number = 21.3280192;
  lng:number = -157.8692847;
  places: any= [
    {premiun: false,distance:1, distanceRange:1,show:true,name:'Florería'},
    {premiun: true,distance:6, distanceRange:2,show:false,name:'Donas'},
    {premiun: true,distance:12, distanceRange:3,show:true,name:'Zapatería'},
    {premiun: true,distance:13.5, distanceRange:3,show:true,name:'Veterinaria'},
    {premiun: true,distance:11, distanceRange:3,show:true,name:'Florería'},
    {premiun: false,distance:8, distanceRange:2,show:false,name:'Donas'},
    {premiun: true,distance:14, distanceRange:3,show:false,name:'Zapatería'},
    {premiun: true,distance:2, distanceRange:1,show:true,name:'Veterinaria'},
    {premiun: true,distance:7, distanceRange:2,show:true,name:'Florería'},
    {premiun: false,distance:6.7, distanceRange:2,show:false,name:'Donas'},
    {premiun: true,distance:0.5, distanceRange:1,show:false,name:'Zapatería'},
    {premiun: true,distance:1.2, distanceRange:1,show:true,name:'Veterinaria'}
  ];
  constructor(){
  }
  sayHello = function(){
    alert('Hello');
  }
}
