import { Component } from '@angular/core';
import { SchedulerComponent } from './scheduler/scheduler.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welkom bij mijn Angular-applicatie</h1>
    <app-scheduler></app-scheduler>
  `
})
export class AppComponent {
}
