import { IApiCumulativeQuantity } from '../edidb'
export class CApiCumulativeQuantity implements IApiCumulativeQuantity {
    public TP_PartID:string = '';
    public cusno:string = '';
    public TP_Name:string = '';
    public shiptoid:string = '';
    public ShipTo_Name:string = '';
    public itemid:string = '';
    public purchaseorderno:string = '';
    public cmqty:number = 0;
    public constructor(init?:Partial<CApiCumulativeQuantity>) { Object.assign(this, init); }
}
export const IApiCumulativeQuantity_TP_PartID_length = 30;
export const IApiCumulativeQuantity_cusno_length = 100;
export const IApiCumulativeQuantity_TP_Name_length = 30;
export const IApiCumulativeQuantity_shiptoid_length = 80;
export const IApiCumulativeQuantity_ShipTo_Name_length = 80;
export const IApiCumulativeQuantity_itemid_length = 500;
export const IApiCumulativeQuantity_purchaseorderno_length = 30;

export const kApiCumulativeQuantity_TP_PartID="TP_PartID";
export const kApiCumulativeQuantity_cusno="cusno";
export const kApiCumulativeQuantity_TP_Name="TP_Name";
export const kApiCumulativeQuantity_shiptoid="shiptoid";
export const kApiCumulativeQuantity_ShipTo_Name="ShipTo_Name";
export const kApiCumulativeQuantity_itemid="itemid";
export const kApiCumulativeQuantity_purchaseorderno="purchaseorderno";
export const kApiCumulativeQuantity_cmqty="cmqty";
