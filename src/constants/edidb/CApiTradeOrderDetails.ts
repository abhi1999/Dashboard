import { IApiTradeOrderDetails } from '../edidb'
export class CApiTradeOrderDetails implements IApiTradeOrderDetails {
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
    public constructor(init?:Partial<CApiTradeOrderDetails>) { Object.assign(this, init); }
}
export const kApiTradeOrderDetails_Order_No="Order_No";
export const kApiTradeOrderDetails_Acct_Order_No="Acct_Order_No";
export const kApiTradeOrderDetails_TP_ID="TP_ID";
export const kApiTradeOrderDetails_TP_Name="TP_Name";
export const kApiTradeOrderDetails_ShipTo_Xref="ShipTo_Xref";
export const kApiTradeOrderDetails_Order_Date="Order_Date";
export const kApiTradeOrderDetails_Ship_Date="Ship_Date";
export const kApiTradeOrderDetails_Cust_PO="Cust_PO";
export const kApiTradeOrderDetails_Exp_Flag="Exp_Flag";
export const kApiTradeOrderDetails_Stat_Flag="Stat_Flag";
export const kApiTradeOrderDetails_Ship_To_Name="Ship_To_Name";
export const kApiTradeOrderDetails_Loc_ID="Loc_ID";
export const kApiTradeOrderDetails_ShipTo_ID="ShipTo_ID";
export const kApiTradeOrderDetails_ShipTo_DC="ShipTo_DC";
export const kApiTradeOrderDetails_ASN_ID="ASN_ID";
export const kApiTradeOrderDetails_status="status";
