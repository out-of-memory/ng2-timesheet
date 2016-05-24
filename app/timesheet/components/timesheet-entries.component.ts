import { Component, OnInit } from '@angular/core';
import { TimesheetEntry } from '../models/timesheet-entry';
import { Router } from '@angular/router-deprecated';
import {TimesheetService} from '../services/timesheet.service';

@Component({
  selector: 'timesheet-entries',
  templateUrl: './app/timesheet/views/timesheet-entries.component.html',
  providers:[TimesheetService]
})
export class TimesheetEntries implements OnInit {
  
  timesheetEntiries: Array<TimesheetEntry>;
  private _tsService:TimesheetService;
  constructor(
    private router: Router,
    private tsService:TimesheetService
    
    ) {
        this._tsService=tsService;
        
     }
  
  ngOnInit() {
  this._tsService.getTimesheetEntries().then(timesheetEntiries=>this.timesheetEntiries=timesheetEntiries);
  }
  Redirect() {
    
    this.router.navigate(["NewTimesheetEntry"]);
  }
}