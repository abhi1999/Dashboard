import { IAsnIn } from '../edidb'
export class CAsnIn implements IAsnIn {
    public Asn_ID:number = 0;
    public TP_PartID:string = '';
    public Bol_No:string = '';
    public Pro_No:string = '';
    public Ship_Date:Date;
    public Ship_Via_ID:string = '';
    public constructor(init?:Partial<CAsnIn>) { Object.assign(this, init); }
}
export const IAsnIn_TP_PartID_length = 30;
export const IAsnIn_Bol_No_length = 30;
export const IAsnIn_Pro_No_length = 30;
export const IAsnIn_Ship_Via_ID_length = 30;

export const kAsnIn_Asn_ID="Asn_ID";
export const kAsnIn_TP_PartID="TP_PartID";
export const kAsnIn_Bol_No="Bol_No";
export const kAsnIn_Pro_No="Pro_No";
export const kAsnIn_Ship_Date="Ship_Date";
export const kAsnIn_Ship_Via_ID="Ship_Via_ID";
