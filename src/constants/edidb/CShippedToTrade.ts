import { IShippedToTrade } from '../edidb'
export class CShippedToTrade implements IShippedToTrade {
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
    public constructor(init?:Partial<CShippedToTrade>) { Object.assign(this, init); }
}
export const IShippedToTrade_TP_PartID_length = 30;
export const IShippedToTrade_TP_Name_length = 30;
export const IShippedToTrade_cusno_length = 100;
export const IShippedToTrade_shiptoid_length = 80;
export const IShippedToTrade_itemid_length = 500;
export const IShippedToTrade_purchaseorderno_length = 30;
export const IShippedToTrade_shipdate_length = 30;
export const IShippedToTrade_reason_length = 80;
export const IShippedToTrade_reference_length = 60;
export const IShippedToTrade_userid_length = 50;
export const IShippedToTrade_machineid_length = 50;

export const kShippedToTrade_TP_PartID="TP_PartID";
export const kShippedToTrade_TP_Name="TP_Name";
export const kShippedToTrade_cusno="cusno";
export const kShippedToTrade_shiptoid="shiptoid";
export const kShippedToTrade_itemid="itemid";
export const kShippedToTrade_purchaseorderno="purchaseorderno";
export const kShippedToTrade_shipdate="shipdate";
export const kShippedToTrade_reason="reason";
export const kShippedToTrade_reference="reference";
export const kShippedToTrade_userid="userid";
export const kShippedToTrade_machineid="machineid";
export const kShippedToTrade_qty="qty";
export const kShippedToTrade_cm="cm";
