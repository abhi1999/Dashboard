import { IOrderLIn } from '../edidb'
export class COrderLIn implements IOrderLIn {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public TP_ID:string = '';
    public Order_Date:Date;
    public Int_Item_No:string = '';
    public Quantity:number = 0;
    public QtyRecvd:number = 0;
    public POPrice:number = 0;
    public DateLastRecvd:Date;
    public QtyInv:number = 0;
    public DateLastInv:Date;
    public Stat_Flag:string = '';
    public Inv_Stat_Flag:string = '';
    public Loc_ID:string = '';
    public constructor(init?:Partial<COrderLIn>) { Object.assign(this, init); }
}
export const IOrderLIn_TP_ID_length = 30;
export const IOrderLIn_Int_Item_No_length = 500;
export const IOrderLIn_Stat_Flag_length = 1;
export const IOrderLIn_Inv_Stat_Flag_length = 1;
export const IOrderLIn_Loc_ID_length = 10;

export const kOrderLIn_Order_No="Order_No";
export const kOrderLIn_Line_No="Line_No";
export const kOrderLIn_TP_ID="TP_ID";
export const kOrderLIn_Order_Date="Order_Date";
export const kOrderLIn_Int_Item_No="Int_Item_No";
export const kOrderLIn_Quantity="Quantity";
export const kOrderLIn_QtyRecvd="QtyRecvd";
export const kOrderLIn_POPrice="POPrice";
export const kOrderLIn_DateLastRecvd="DateLastRecvd";
export const kOrderLIn_QtyInv="QtyInv";
export const kOrderLIn_DateLastInv="DateLastInv";
export const kOrderLIn_Stat_Flag="Stat_Flag";
export const kOrderLIn_Inv_Stat_Flag="Inv_Stat_Flag";
export const kOrderLIn_Loc_ID="Loc_ID";
