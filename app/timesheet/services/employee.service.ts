
import { Injectable , Inject} from '@angular/core';
import { Employee, EmployeeAddress } from '../models/Employee';
import { KVDatabase } from '../../repository/KVDatabase';

@Injectable()
export class TimesheetService {
    private _context:KVDatabase;
    constructor(@Inject(KVDatabase) context:KVDatabase){
        this._context=context;
    }
    
  getTimesheetEntries() {
    return Promise.resolve(this._context.ListAll("employee"));
  }
  
  getTimesheet(id:number):Promise<Employee> {
    return  new Promise<Employee>((resolve, reject) => { 
    return this._context.ListAll("employee")[0];
});
  }
  
  
  addNewEntry(newEntry:Employee)
  {
           this._context.Add("employee",newEntry);
  }
  
  
  // See the "Take it slow" appendix
//   getHeroesSlowly() {
//     return new Promise(resolve =>
//       setTimeout(()=>resolve(this.timesheetEntryArray), 2000) // 2 seconds
//     );
//   }
  
  getTimeSheet(id: number) {
  return Promise.resolve(this._context.ListAll("employee")).then(
    models => models.filter(model => model.id === id)[0]
  );
}
}