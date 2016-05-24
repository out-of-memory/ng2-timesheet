import { Component, OnInit } from '@angular/core';
import { TimesheetEntry } from '../models/timesheet-entry';
import { Router } from '@angular/router-deprecated';
import {TimesheetService} from '../services/timesheet.service';

@Component({
  selector: 'timesheet-entries',
  templateUrl: './app/timesheet/views/new-timesheet-entry.component.html',
  providers:[TimesheetService]
})
export class NewTimesheetEntry implements OnInit {
  
  newTimesheetEntry:TimesheetEntry;
  private _tsService:TimesheetService;
  constructor(
    private router: Router,
    private tsService:TimesheetService
    
    ) {
        this._tsService=tsService;
        this.newTimesheetEntry=new TimesheetEntry();        
     }
  ngOnInit() {
  
  }
  save(){
      this.newTimesheetEntry.Id=(new Date()).getTime();
      this._tsService.addNewEntry(this.newTimesheetEntry);
      this.newTimesheetEntry=new TimesheetEntry();
  }

  saveAndRedirect(here:string){
      this.save();
      this.router.navigate([here]);
  }

}