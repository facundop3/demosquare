import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  selectedMonth:any;
  monthsList:any = [
    {days:1, value:1, name:"Enero"},
    {days:3, value:2, name:"Febrero"},
    {days:1, value:3, name:"Marzo"},
    {days:2, value:4, name:"Abril"},
    {days:1, value:5, name:"Mayo"},
    {days:2, value:6, name:"Junio"},
    {days:1, value:7, name:"Julio"},
    {days:1, value:8, name:"Agosto"},
    {days:2, value:9, name:"Setiembre"},
    {days:1, value:10, name:"Octubre"},
    {days:2, value:11, name:"Noviembre"},
    {days:1, value:12, name:"Diciembre"},
  ];
  daysList: Array<number> = (Array.from(Array(31).keys())).map((x)=> x+1);
  yearsList: Array<number> = (Array.from(Array(120).keys())).map((x)=> ((new Date).getFullYear()) - x);
  constructor() { }

  setDays = function(num){
    console.log(num.days);
    // this.daysList= (Array.from(Array(num).keys())).map((x)=> x+1);
  }
  getdays(){
    console.log(this.daysList)
  }
  trackByIndex(index: number, obj: any): any {
  return index;
  }
  ngOnInit() {
  }

}
