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