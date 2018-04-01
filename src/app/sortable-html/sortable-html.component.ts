import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';



@Component({
  selector: 'app-sortable-html',
  templateUrl: './sortable-html.component.html',
  styleUrls: ['./sortable-html.component.css']
})
export class SortableHtmlComponent implements OnInit {
   items1 = [1, 2, 3, 4, 5];
  constructor() {

   }

  ngOnInit() {
  }

}
