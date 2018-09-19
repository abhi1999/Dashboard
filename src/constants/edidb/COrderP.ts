import { IOrderP } from '../edidb'
export class COrderP implements IOrderP {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public Pack_ID:number = 0;
    public Pack_Level:number = 0;
    public PackQty:number = 0;
    public Asn_ID:number = 0;
    public Box_ID:number = 0;
    public Pack_Wt:number = 0;
    public Mixed:string = '';
    public TrackingNo:string = '';
    public SSCC:string = '';
    public PKG_ID:string = '';
    public RFID:string = '';
    public constructor(init?:Partial<COrderP>) { Object.assign(this, init); }
}
export const IOrderP_Mixed_length = 1;
export const IOrderP_TrackingNo_length = 50;
export const IOrderP_SSCC_length = 30;
export const IOrderP_PKG_ID_length = 10;
export const IOrderP_RFID_length = 50;

export const kOrderP_Order_No="Order_No";
export const kOrderP_Line_No="Line_No";
export const kOrderP_Pack_ID="Pack_ID";
export const kOrderP_Pack_Level="Pack_Level";
export const kOrderP_PackQty="PackQty";
export const kOrderP_Asn_ID="Asn_ID";
export const kOrderP_Box_ID="Box_ID";
export const kOrderP_Pack_Wt="Pack_Wt";
export const kOrderP_Mixed="Mixed";
export const kOrderP_TrackingNo="TrackingNo";
export const kOrderP_SSCC="SSCC";
export const kOrderP_PKG_ID="PKG_ID";
export const kOrderP_RFID="RFID";
