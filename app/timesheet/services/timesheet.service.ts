
import { Injectable , Inject} from '@angular/core';
import { TimesheetEntry } from '../models/timesheet-entry';
import { KVDatabase } from '../../repository/KVDatabase';

@Injectable()
export class TimesheetService {
    public timesheetEntryArray:Array<TimesheetEntry>;
    private _context:KVDatabase;
    constructor(@Inject(KVDatabase) context:KVDatabase){
        this.timesheetEntryArray=new Array<TimesheetEntry>();
        this._context=context;
    }
    
  getTimesheetEntries() {
    return Promise.resolve(this._context.ListAll("timesheet"));
  }
  
  getTimesheet(id:number):Promise<TimesheetEntry> {
    return  new Promise<TimesheetEntry>((resolve, reject) => { 
    return this._context.ListAll("timesheet")[0];
});
  }
  
  
  addNewEntry(newEntry:TimesheetEntry)
  {
           this._context.Add("timesheet",newEntry);
  }
  
  
  // See the "Take it slow" appendix
//   getHeroesSlowly() {
//     return new Promise(resolve =>
//       setTimeout(()=>resolve(this.timesheetEntryArray), 2000) // 2 seconds
//     );
//   }
  
  getTimeSheet(id: number) {
  return Promise.resolve(this._context.ListAll("timesheet")).then(
    timeSheetEntries => timeSheetEntries.filter(timeSheetEntry => timeSheetEntry.id === id)[0]
  );
}
}