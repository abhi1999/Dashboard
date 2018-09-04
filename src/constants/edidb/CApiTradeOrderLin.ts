import { IApiTradeOrderLin } from '../edidb'
export class CApiTradeOrderLin implements IApiTradeOrderLin {
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
    public TP_Name:string = '';
    public constructor(init?:Partial<CApiTradeOrderLin>) { Object.assign(this, init); }
}
export const IApiTradeOrderLin_TP_ID_length = 30;
export const IApiTradeOrderLin_Int_Item_No_length = 500;
export const IApiTradeOrderLin_Stat_Flag_length = 1;
export const IApiTradeOrderLin_Inv_Stat_Flag_length = 1;
export const IApiTradeOrderLin_Loc_ID_length = 10;
export const IApiTradeOrderLin_TP_Name_length = 30;
