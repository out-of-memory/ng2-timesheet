
import { Injectable } from '@angular/core';
import {KVDataitem} from './KVDataitem';
@Injectable()
export class KVDatabase{
    private _kvdb:KVDataitem=new KVDataitem();
    
    public Add(key:string,entity:any){
        
        var kvArray=this._kvdb[key];
        if(kvArray===undefined)
            kvArray=[];
        kvArray.push(entity);
        this._kvdb[key]=kvArray;
        console.log(this._kvdb);
       return false; 
    }
    
    public ListAll(key:string):Array<any>{
        var kvArray=this._kvdb[key];
        if(kvArray===undefined)
            return [];
       return kvArray; 
    }
    
    
}