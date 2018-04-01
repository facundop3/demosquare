import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat:number = 21.3280192;
  lng:number = -157.8692847;
  places: any= [
    {premiun: false,distance:1, distanceRange:1,show:true,name:'Heladería'},
    {premiun: true,distance:6, distanceRange:2,show:false,name:'Game of Donas'},
    {premiun: true,distance:12, distanceRange:3,show:true,name:'Papas felices en caja'},
    {premiun: true,distance:13.5, distanceRange:3,show:true,name:'Café'},
    {premiun: true,distance:11, distanceRange:3,show:true,name:'Pizzas Miami'},
    {premiun: false,distance:8, distanceRange:2,show:false,name:'Más Donas'},
    {premiun: true,distance:14, distanceRange:3,show:false,name:'Zapatería?'},
    {premiun: true,distance:2, distanceRange:1,show:true,name:'House of hocolates'},
    {premiun: true,distance:7, distanceRange:2,show:true,name:'Panadería'},
    {premiun: false,distance:6.7, distanceRange:2,show:false,name:'Quesoso'},
    {premiun: true,distance:0.5, distanceRange:1,show:false,name:'Pollo frito'},
    {premiun: true,distance:1.2, distanceRange:1,show:true,name:'Breaking bread'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
