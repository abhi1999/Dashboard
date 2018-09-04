import { IOrderPIn } from '../edidb'
export class COrderPIn implements IOrderPIn {
    public Order_No:string = '';
    public Box_ID:string = '';
    public PO1_LineNo:string = '';
    public Lot:string = '';
    public Int_Item_No:string = '';
    public UPC:string = '';
    public PackQty:number = 0;
    public Asn_ID:number = 0;
    public TrackingNo:string = '';
    public Stat_Flag:string = '';
    public LotExp:string = '';
    public constructor(init?:Partial<COrderPIn>) { Object.assign(this, init); }
}
export const IOrderPIn_Order_No_length = 30;
export const IOrderPIn_Box_ID_length = 20;
export const IOrderPIn_PO1_LineNo_length = 11;
export const IOrderPIn_Lot_length = 30;
export const IOrderPIn_Int_Item_No_length = 500;
export const IOrderPIn_UPC_length = 20;
export const IOrderPIn_TrackingNo_length = 30;
export const IOrderPIn_Stat_Flag_length = 1;
export const IOrderPIn_LotExp_length = 8;
