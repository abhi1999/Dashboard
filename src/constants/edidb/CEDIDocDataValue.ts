import { IEDIDocDataValue } from '../edidb'
export class CEDIDocDataValue implements IEDIDocDataValue {
    public UEDID:string = '';
    public Rev_Count:number = 0;
    public Rev_Date:Date;
    public Elem_value:string = '';
    public User_ID:string = '';
    public Machine_ID:string = '';
    public UVDID:string = '';
    public constructor(init?:Partial<CEDIDocDataValue>) { Object.assign(this, init); }
}
export const IEDIDocDataValue_Elem_value_length = 500;
export const IEDIDocDataValue_User_ID_length = 50;
export const IEDIDocDataValue_Machine_ID_length = 50;
