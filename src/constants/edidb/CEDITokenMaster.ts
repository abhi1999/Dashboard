import { IEDITokenMaster } from '../edidb'
export class CEDITokenMaster implements IEDITokenMaster {
    public TID:string = '';
    public Token_Name:string = '';
    public Seq_No:number = 0;
    public Pkey:string = '';
    public constructor(init?:Partial<CEDITokenMaster>) { Object.assign(this, init); }
}
export const IEDITokenMaster_Token_Name_length = 50;

export const kEDITokenMaster_TID="TID";
export const kEDITokenMaster_Token_Name="Token_Name";
export const kEDITokenMaster_Seq_No="Seq_No";
export const kEDITokenMaster_Pkey="Pkey";
