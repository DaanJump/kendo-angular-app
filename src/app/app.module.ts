import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
  ],
  imports: [
    BrowserModule,
    SchedulerModule,
    DateInputsModule,
    ReactiveFormsModule,
    DropDownListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
