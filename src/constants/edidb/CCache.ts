import { ICache } from '../edidb'
export class CCache implements ICache {
    public Obj_ID:string = '';
    public Obj_Name:string = '';
    public Obj_Type:string = '';
    public Obj_Date:Date;
    public Obj_Data:number[];
    public Obj_Size:number = 0;
    public ImportDate:Date;
    public User_ID:string = '';
    public Machine_ID:string = '';
    public constructor(init?:Partial<CCache>) { Object.assign(this, init); }
}
export const ICache_Obj_Name_length = 50;
export const ICache_Obj_Type_length = 3;
export const ICache_User_ID_length = 50;
export const ICache_Machine_ID_length = 50;
