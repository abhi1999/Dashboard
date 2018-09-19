import { IShippedTo } from '../edidb'
export class CShippedTo implements IShippedTo {
    public TP_PartID:string = '';
    public cusno:string = '';
    public TP_Name:string = '';
    public shiptoid:string = '';
    public ShipTo_Name:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public cmqty:number = 0;
    public constructor(init?:Partial<CShippedTo>) { Object.assign(this, init); }
}
export const IShippedTo_TP_PartID_length = 30;
export const IShippedTo_cusno_length = 100;
export const IShippedTo_TP_Name_length = 30;
export const IShippedTo_shiptoid_length = 80;
export const IShippedTo_ShipTo_Name_length = 80;
export const IShippedTo_itemid_length = 500;
export const IShippedTo_purchaseorderno_length = 30;

export const kShippedTo_TP_PartID="TP_PartID";
export const kShippedTo_cusno="cusno";
export const kShippedTo_TP_Name="TP_Name";
export const kShippedTo_shiptoid="shiptoid";
export const kShippedTo_ShipTo_Name="ShipTo_Name";
export const kShippedTo_itemid="itemid";
export const kShippedTo_purchaseorderno="purchaseorderno";
export const kShippedTo_cmqty="cmqty";
