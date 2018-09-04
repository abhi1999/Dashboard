import { IEDIStdDoc } from '../edidb'
export class CEDIStdDoc implements IEDIStdDoc {
    public Std_ID:string = '';
    public Rel_No:string = '';
    public Doc_ID:string = '';
    public DGID:string = '';
    public SDID:string = '';
    public constructor(init?:Partial<CEDIStdDoc>) { Object.assign(this, init); }
}
export const IEDIStdDoc_Std_ID_length = 50;
export const IEDIStdDoc_Rel_No_length = 50;
export const IEDIStdDoc_Doc_ID_length = 50;
export const IEDIStdDoc_DGID_length = 5;
