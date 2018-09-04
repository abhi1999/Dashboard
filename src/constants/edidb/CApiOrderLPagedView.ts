import { IApiOrderLPagedView } from '../edidb'
export class CApiOrderLPagedView implements IApiOrderLPagedView {
    public Order_No:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public Order_Date:string = '';
    public Acct_Order_No:string = '';
    public Cust_PO:string = '';
    public Stat_Flag:string = '';
    public status:string = '';
    public constructor(init?:Partial<CApiOrderLPagedView>) { Object.assign(this, init); }
}
export const IApiOrderLPagedView_TP_PartID_length = 30;
export const IApiOrderLPagedView_TP_Name_length = 30;
export const IApiOrderLPagedView_Order_Date_length = 8;
export const IApiOrderLPagedView_Acct_Order_No_length = 30;
export const IApiOrderLPagedView_Cust_PO_length = 30;
export const IApiOrderLPagedView_Stat_Flag_length = 1;
export const IApiOrderLPagedView_status_length = 500;
