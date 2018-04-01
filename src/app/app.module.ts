import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { RemarkDirective } from './directives/remark.directive';
import { ClickCounterDirective } from './directives/click-counter.directive';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { SortableHtmlComponent } from './sortable-html/sortable-html.component';

import { SortablejsModule } from 'angular-sortablejs';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'detail',component: DetailComponent},
  {path:'sort',component: SortableHtmlComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RemarkDirective,
    ClickCounterDirective,
    DetailComponent,
    HomeComponent,
    SortableHtmlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDjGffLTcaz4z-aLveYaBnvOa_rzs1x0Q'
    }),
    RouterModule.forRoot(appRoutes),
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
