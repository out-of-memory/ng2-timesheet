// import { Component, OnInit } from '@angular/core';
// import { EmployeeAddress } from '../models/Employee';
// import { Router } from '@angular/router-deprecated';
// import {EmployeeService} from '../services/employee.service';

// @Component({
//   selector: 'timesheet-entries',
//   templateUrl: './app/timesheet/views/timesheet-entries.component.html',
//   providers:[EmployeeService]
// })
// export class TimesheetEntries implements OnInit {
  
//   model: Array<EmployeeAddress>;
//   private _tsService:TimesheetService;
//   constructor(
//     private router: Router,
//     private tsService:TimesheetService
    
//     ) {
//         this._tsService=tsService;
        
//      }
  
//   ngOnInit() {
//   this._tsService.getTimesheetEntries().then(timesheetEntiries=>this.timesheetEntiries=timesheetEntiries);
  
//   }
//   Redirect() {
    
//     this.router.navigate(["NewTimesheetEntry"]);
//   }
// }