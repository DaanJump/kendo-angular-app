import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

export interface CustomSchedulerEvent {
  id: number;
  title: string;
  resourceId: number; // wijziging hier
}

