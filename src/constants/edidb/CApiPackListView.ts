import { IApiPackListView } from '../edidb'
export class CApiPackListView implements IApiPackListView {
    public Order_No:number = 0;
    public Acct_Order_No:string = '';
    public TP_ID:string = '';
    public TP_Name:string = '';
    public ShipTo_Xref:string = '';
    public Order_Date:string = '';
    public Ship_Date:Date;
    public Cust_PO:string = '';
    public Exp_Flag:string = '';
    public Stat_Flag:string = '';
    public Ship_To_Name:string = '';
    public Loc_ID:string = '';
    public ShipTo_ID:string = '';
    public ShipTo_DC:string = '';
    public ASN_ID:number = 0;
    public status:string = '';
    public constructor(init?:Partial<CApiPackListView>) { Object.assign(this, init); }
}
export const IApiPackListView_Acct_Order_No_length = 30;
export const IApiPackListView_TP_ID_length = 30;
export const IApiPackListView_TP_Name_length = 30;
export const IApiPackListView_ShipTo_Xref_length = 30;
export const IApiPackListView_Order_Date_length = 8;
export const IApiPackListView_Cust_PO_length = 30;
export const IApiPackListView_Exp_Flag_length = 1;
export const IApiPackListView_Stat_Flag_length = 1;
export const IApiPackListView_Ship_To_Name_length = 50;
export const IApiPackListView_Loc_ID_length = 20;
export const IApiPackListView_ShipTo_ID_length = 80;
export const IApiPackListView_ShipTo_DC_length = 30;
export const IApiPackListView_status_length = 500;
