import { IApiReceiveOrder } from '../edidb'
export class CApiReceiveOrder implements IApiReceiveOrder {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public TP_ID:string = '';
    public Order_Date:Date;
    public Int_Item_No:string = '';
    public Quantity:number = 0;
    public QtyRecvd:number = 0;
    public DateLastRecvd:Date;
    public Stat_Flag:string = '';
    public TP_Name:string = '';
    public constructor(init?:Partial<CApiReceiveOrder>) { Object.assign(this, init); }
}
export const IApiReceiveOrder_TP_ID_length = 30;
export const IApiReceiveOrder_Int_Item_No_length = 500;
export const IApiReceiveOrder_Stat_Flag_length = 1;
export const IApiReceiveOrder_TP_Name_length = 30;
