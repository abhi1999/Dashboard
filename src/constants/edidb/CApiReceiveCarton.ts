import { IApiReceiveCarton } from '../edidb'
export class CApiReceiveCarton implements IApiReceiveCarton {
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
    public constructor(init?:Partial<CApiReceiveCarton>) { Object.assign(this, init); }
}
export const IApiReceiveCarton_Order_No_length = 30;
export const IApiReceiveCarton_TP_Name_length = 30;
export const IApiReceiveCarton_Box_ID_length = 20;
export const IApiReceiveCarton_Int_Item_No_length = 500;
export const IApiReceiveCarton_Stat_Flag_length = 1;
export const IApiReceiveCarton_TrackingNo_length = 30;
export const IApiReceiveCarton_Lot_length = 30;
export const IApiReceiveCarton_LotExp_length = 8;
export const IApiReceiveCarton_PO1_LineNo_length = 11;
