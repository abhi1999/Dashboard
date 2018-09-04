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
