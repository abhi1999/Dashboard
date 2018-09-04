import { IEDIStdCode } from '../edidb'
export class CEDIStdCode implements IEDIStdCode {
    public Std_ID:string = '';
    public Rel_No:string = '';
    public Elem_ID:string = '';
    public Code_Value:string = '';
    public Code_Desc:string = '';
    public SCID:string = '';
    public constructor(init?:Partial<CEDIStdCode>) { Object.assign(this, init); }
}
export const IEDIStdCode_Std_ID_length = 50;
export const IEDIStdCode_Rel_No_length = 50;
export const IEDIStdCode_Elem_ID_length = 5;
export const IEDIStdCode_Code_Value_length = 40;
export const IEDIStdCode_Code_Desc_length = 65;
