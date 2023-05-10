import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { SchedulerEvent, CreateFormGroupArgs, EditMode } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-scheduler',
  template: `
    <kendo-scheduler 
    [kendoSchedulerReactiveEditing]="createFormGroup"
    [events]="events" [resources]="resources" 
    [group]="{orientation: 'vertical', 
    resources: ['Tafels'] }"
    >
      <kendo-scheduler-multi-week-view [numberOfWeeks]="1">
        <ng-template kendoSchedulerMultiWeekDaySlotTemplate=""></ng-template>
      </kendo-scheduler-multi-week-view>
    </kendo-scheduler>
  `
})
export class SchedulerComponent {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  public events: SchedulerEvent[] = [

  ];
  

  public resources: any[] = [
    {
      name: 'Tafels',
      data: [
        { text: 'Tafel 1', value: 1 },
        { text: 'Tafel 2', value: 2 },
        { text: 'Tafel 3', value: 3 },
        { text: 'Tafel 4', value: 4 }
      ],
      field: 'resourceId',
      valueField: 'value',
      textField: 'text'
    }
  ];

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    const isOccurrence = args.mode === (EditMode.Occurrence as any);
    const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

    this.formGroup = this.formBuilder.group(
      {
        id: args.isNew ? this.getNextId() : dataItem.id,
        start: [dataItem.start, Validators.required],
        end: [dataItem.end, Validators.required],
        startTimezone: [dataItem.startTimezone],
        endTimezone: [dataItem.endTimezone],
        isAllDay: dataItem.isAllDay,
        title: dataItem.title,
        description: dataItem.description,
        recurrenceRule: dataItem.recurrenceRule,
        recurrenceId: dataItem.recurrenceId,
        recurrenceExceptions: [exceptions],
      },
    );

    return this.formGroup;
  }

  public getNextId(): number {
    const len = this.events.length;

    return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
  }

  
}
