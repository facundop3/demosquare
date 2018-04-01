import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { RemarkDirective } from './directives/remark.directive';
import { ClickCounterDirective } from './directives/click-counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemarkDirective,
    ClickCounterDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDjGffLTcaz4z-aLveYaBnvOa_rzs1x0Q'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
