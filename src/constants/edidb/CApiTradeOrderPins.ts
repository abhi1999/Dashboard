import { IApiTradeOrderPins } from '../edidb'
export class CApiTradeOrderPins implements IApiTradeOrderPins {
    public Order_No:string = '';
    public TP_Name:string = '';
    public Box_ID:string = '';
    public Int_Item_No:string = '';
    public PackQty:number = 0;
    public Stat_Flag:string = '';
    public Asn_ID:number = 0;
    public TrackingNo:string = '';
    public Lot:string = '';
    public LotExp:string = '';
    public PO1_LineNo:string = '';
    public constructor(init?:Partial<CApiTradeOrderPins>) { Object.assign(this, init); }
}
export const IApiTradeOrderPins_Order_No_length = 30;
export const IApiTradeOrderPins_TP_Name_length = 30;
export const IApiTradeOrderPins_Box_ID_length = 20;
export const IApiTradeOrderPins_Int_Item_No_length = 500;
export const IApiTradeOrderPins_Stat_Flag_length = 1;
export const IApiTradeOrderPins_TrackingNo_length = 30;
export const IApiTradeOrderPins_Lot_length = 30;
export const IApiTradeOrderPins_LotExp_length = 8;
export const IApiTradeOrderPins_PO1_LineNo_length = 11;

export const kApiTradeOrderPins_Order_No="Order_No";
export const kApiTradeOrderPins_TP_Name="TP_Name";
export const kApiTradeOrderPins_Box_ID="Box_ID";
export const kApiTradeOrderPins_Int_Item_No="Int_Item_No";
export const kApiTradeOrderPins_PackQty="PackQty";
export const kApiTradeOrderPins_Stat_Flag="Stat_Flag";
export const kApiTradeOrderPins_Asn_ID="Asn_ID";
export const kApiTradeOrderPins_TrackingNo="TrackingNo";
export const kApiTradeOrderPins_Lot="Lot";
export const kApiTradeOrderPins_LotExp="LotExp";
export const kApiTradeOrderPins_PO1_LineNo="PO1_LineNo";
