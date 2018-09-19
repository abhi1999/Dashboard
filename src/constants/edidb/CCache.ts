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

export const kCache_Obj_ID="Obj_ID";
export const kCache_Obj_Name="Obj_Name";
export const kCache_Obj_Type="Obj_Type";
export const kCache_Obj_Date="Obj_Date";
export const kCache_Obj_Data="Obj_Data";
export const kCache_Obj_Size="Obj_Size";
export const kCache_ImportDate="ImportDate";
export const kCache_User_ID="User_ID";
export const kCache_Machine_ID="Machine_ID";
