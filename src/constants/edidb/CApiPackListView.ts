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

export const kApiPackListView_Order_No="Order_No";
export const kApiPackListView_Acct_Order_No="Acct_Order_No";
export const kApiPackListView_TP_ID="TP_ID";
export const kApiPackListView_TP_Name="TP_Name";
export const kApiPackListView_ShipTo_Xref="ShipTo_Xref";
export const kApiPackListView_Order_Date="Order_Date";
export const kApiPackListView_Ship_Date="Ship_Date";
export const kApiPackListView_Cust_PO="Cust_PO";
export const kApiPackListView_Exp_Flag="Exp_Flag";
export const kApiPackListView_Stat_Flag="Stat_Flag";
export const kApiPackListView_Ship_To_Name="Ship_To_Name";
export const kApiPackListView_Loc_ID="Loc_ID";
export const kApiPackListView_ShipTo_ID="ShipTo_ID";
export const kApiPackListView_ShipTo_DC="ShipTo_DC";
export const kApiPackListView_ASN_ID="ASN_ID";
export const kApiPackListView_status="status";
