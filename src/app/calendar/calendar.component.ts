import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  weekDaysLetters:any = ['D','L','M','M','J','V','S'];
  daysList:any;
  weeksList:any;
  monthPicker:any = ((((new Date()).toLocaleDateString()).split('/')).reverse()).join('-');
  constructor() {
    this.getDaysInMonth(this.monthPicker);
  }
    getDaysInMonth = function (monthYearDay) {
      console.log("getDaysInMonth:")
      let year = (monthYearDay.split('-')).slice(0,2).map(x => Number(x))[0]
      let month = (monthYearDay.split('-')).slice(0,2).map(x => Number(x) -1)[1]
      console.log(year)
      console.log(month)
      var date = new Date(year, month, 1);
      console.log(date)
      var days = [];
      while (date.getMonth() === month) {
            days.push({"date":(new Date(date)).getDate(),"weekDay":(new Date(date)).getDay() , "clicked":false,"sameAsRight":false });
            date.setDate(date.getDate() + 1);
         }
         this.daysList= this.addBlankSpaces(days);
         this.splitMonthInWeeks(this.daysList);
         console.log("Weeks list:")
         console.log(this.weeksList);
      }
      addBlankSpaces = function(dayList){
        console.log("addBlankSpaces :")
        let weekDay = dayList[0].weekDay;
        console.log(weekDay);
        let result = dayList;
        for(let i = 0; i<weekDay ; i++ ){
          result.unshift({"date": 'x'});
        }
        for(let i = result.length; i< 35; i++){
          result.push({"date": 'x'});
        }
        console.log(result)
        return result;
      }
      splitMonthInWeeks = function(dayList){
        console.log("splitMonthInWeeks:")
        console.log(this.weeksList)
        this.weeksList = [dayList.slice(0,7),dayList.slice(7,14),dayList.slice(14,21),dayList.slice(21,28),dayList.slice(28)]
      }
      markDay = function(event, week , day){
        console.log(week);
        console.log(day);
        console.log(this.weeksList[week][day])
        this.weeksList[week][day].clicked = ! this.weeksList[week][day].clicked;
        console.log(this.weeksList[week][day])
        console.log(this.checkNextDay(week,day))
      }
      checkNextDay = function(week, day){
        if(this.weeksList[week][day].clicked && this.weeksList[week][day-1].clicked){
          this.weeksList[week][day].sameAsRight = true
          this.weeksList[week][day-1].sameAsRight = true
          return 'true'
        }else if (this.weeksList[week][day].clicked && this.weeksList[week][day+1].clicked){
          this.weeksList[week][day].sameAsRight = true
          this.weeksList[week][day+1].sameAsRight = true
          return 'true'

        }
        this.weeksList[week][day].sameAsRight = false
        return 'false'
      }

  ngOnInit() {
  }

}
