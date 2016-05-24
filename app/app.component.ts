import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { KVDatabase } from './repository/KVDatabase';
import { NewTimesheetEntry } from './timesheet/components/new-timesheet-entry.component';
import { TimesheetEntries } from './timesheet/components/timesheet-entries.component';

@Component({
  selector: 'my-app',
 templateUrl:'app/app.component.html' ,
styleUrls:["app/app.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    KVDatabase
  ]
})
@RouteConfig([
  {
    path: '/new-timesheet-entry',
    name: 'NewTimesheetEntry',
    component: NewTimesheetEntry,
    useAsDefault: true
  },
  {
    path: '/timesheet-entiries',
    name: 'ExistingTimesheetEntiries',
    component: TimesheetEntries
  }
])
export class AppComponent {
  title = 'TimeSheet Application';
}