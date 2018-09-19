import { ITradeKit } from '../edidb'
export class CTradeKit implements ITradeKit {
    public TP_Name:string = '';
    public TP_PartQ:string = '';
    public TP_PartID:string = '';
    public TP_GroupID:string = '';
    public TP_ID:string = '';
    public KitTypeID:number = 0;
    public KitTypeDesc:string = '';
    public TP_In850:string = '';
    public TP_Out850:string = '';
    public TP_Asn:string = '';
    public description:string = '';
    public constructor(init?:Partial<CTradeKit>) { Object.assign(this, init); }
}
export const ITradeKit_TP_Name_length = 30;
export const ITradeKit_TP_PartQ_length = 2;
export const ITradeKit_TP_PartID_length = 30;
export const ITradeKit_TP_GroupID_length = 30;
export const ITradeKit_TP_ID_length = 100;
export const ITradeKit_KitTypeDesc_length = 20;
export const ITradeKit_TP_In850_length = 1;
export const ITradeKit_TP_Out850_length = 1;
export const ITradeKit_TP_Asn_length = 1;
export const ITradeKit_description_length = 500;

export const kTradeKit_TP_Name="TP_Name";
export const kTradeKit_TP_PartQ="TP_PartQ";
export const kTradeKit_TP_PartID="TP_PartID";
export const kTradeKit_TP_GroupID="TP_GroupID";
export const kTradeKit_TP_ID="TP_ID";
export const kTradeKit_KitTypeID="KitTypeID";
export const kTradeKit_KitTypeDesc="KitTypeDesc";
export const kTradeKit_TP_In850="TP_In850";
export const kTradeKit_TP_Out850="TP_Out850";
export const kTradeKit_TP_Asn="TP_Asn";
export const kTradeKit_description="description";
