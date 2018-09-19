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

export const kEDIStdSchema_SDID="SDID";
export const kEDIStdSchema_Loop_ID="Loop_ID";
export const kEDIStdSchema_Seg_ID="Seg_ID";
export const kEDIStdSchema_Seg_Name="Seg_Name";
export const kEDIStdSchema_HL_No="HL_No";
export const kEDIStdSchema_Seq_No="Seq_No";
export const kEDIStdSchema_Status="Status";
export const kEDIStdSchema_Repeat="Repeat";
export const kEDIStdSchema_Loop_Repeat="Loop_Repeat";
export const kEDIStdSchema_SSID="SSID";
