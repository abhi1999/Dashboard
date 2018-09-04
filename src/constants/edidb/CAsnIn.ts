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
