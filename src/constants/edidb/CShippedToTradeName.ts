import { IShippedToTradeName } from '../edidb'
export class CShippedToTradeName implements IShippedToTradeName {
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public cusno:string = '';
    public shiptoid:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public shipdate:string = '';
    public reason:string = '';
    public reference:string = '';
    public userid:string = '';
    public machineid:string = '';
    public qty:number = 0;
    public cm:number = 0;
    public constructor(init?:Partial<CShippedToTradeName>) { Object.assign(this, init); }
}
export const IShippedToTradeName_TP_PartID_length = 30;
export const IShippedToTradeName_TP_Name_length = 30;
export const IShippedToTradeName_cusno_length = 100;
export const IShippedToTradeName_shiptoid_length = 80;
export const IShippedToTradeName_itemid_length = 500;
export const IShippedToTradeName_purchaseorderno_length = 30;
export const IShippedToTradeName_shipdate_length = 30;
export const IShippedToTradeName_reason_length = 80;
export const IShippedToTradeName_reference_length = 60;
export const IShippedToTradeName_userid_length = 50;
export const IShippedToTradeName_machineid_length = 50;

export const kShippedToTradeName_TP_PartID="TP_PartID";
export const kShippedToTradeName_TP_Name="TP_Name";
export const kShippedToTradeName_cusno="cusno";
export const kShippedToTradeName_shiptoid="shiptoid";
export const kShippedToTradeName_itemid="itemid";
export const kShippedToTradeName_purchaseorderno="purchaseorderno";
export const kShippedToTradeName_shipdate="shipdate";
export const kShippedToTradeName_reason="reason";
export const kShippedToTradeName_reference="reference";
export const kShippedToTradeName_userid="userid";
export const kShippedToTradeName_machineid="machineid";
export const kShippedToTradeName_qty="qty";
export const kShippedToTradeName_cm="cm";
