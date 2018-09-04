import { IEDIStdSchema } from '../edidb'
export class CEDIStdSchema implements IEDIStdSchema {
    public SDID:string = '';
    public Loop_ID:string = '';
    public Seg_ID:string = '';
    public Seg_Name:string = '';
    public HL_No:number = 0;
    public Seq_No:number = 0;
    public Status:string = '';
    public Repeat:number = 0;
    public Loop_Repeat:number = 0;
    public SSID:string = '';
    public constructor(init?:Partial<CEDIStdSchema>) { Object.assign(this, init); }
}
export const IEDIStdSchema_Loop_ID_length = 50;
export const IEDIStdSchema_Seg_ID_length = 50;
export const IEDIStdSchema_Seg_Name_length = 50;
export const IEDIStdSchema_Status_length = 1;
