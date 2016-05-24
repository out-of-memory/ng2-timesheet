 import {KVDatabase} from "./KVDatabase"
 
 export interface IRepository<Entity>{
     
     List():Array<Entity>;
     Add(entity:Entity):boolean;
     Update(entity:Entity):boolean;
     Remove(key:any):boolean;
     Single(key:any):Entity;
     
     
 } 
 
 export class GenericRepository<Entity> implements IRepository<Entity>{
     
     private _url:string="";
     private _context:KVDatabase;
     constructor(url:string, db:KVDatabase){
         this._url=url;
         this._context=db;
     }
     public List():Array<Entity>{
       return  this._context.ListAll(this._url);
     }
     public Add(entity:Entity):boolean{
         try{
           this._context.Add(this._url, entity);
           return true;
         }
         catch( exp)
         {
             return false;
         }
     }

     public Update(entity:Entity):boolean{
         return false;
     }

     public Remove(key:any):boolean{
         return false;
     }

     public Single(key:any):Entity{
         return null;
     }


 }