import { IShippedToName } from '../edidb'
export class CShippedToName implements IShippedToName {
    public TP_PartID:string = '';
    public cusno:string = '';
    public TP_Name:string = '';
    public shiptoid:string = '';
    public ShipTo_Name:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public cmqty:number = 0;
    public constructor(init?:Partial<CShippedToName>) { Object.assign(this, init); }
}
export const IShippedToName_TP_PartID_length = 30;
export const IShippedToName_cusno_length = 100;
export const IShippedToName_TP_Name_length = 30;
export const IShippedToName_shiptoid_length = 80;
export const IShippedToName_ShipTo_Name_length = 80;
export const IShippedToName_itemid_length = 500;
export const IShippedToName_purchaseorderno_length = 30;

export const kShippedToName_TP_PartID="TP_PartID";
export const kShippedToName_cusno="cusno";
export const kShippedToName_TP_Name="TP_Name";
export const kShippedToName_shiptoid="shiptoid";
export const kShippedToName_ShipTo_Name="ShipTo_Name";
export const kShippedToName_itemid="itemid";
export const kShippedToName_purchaseorderno="purchaseorderno";
export const kShippedToName_cmqty="cmqty";
