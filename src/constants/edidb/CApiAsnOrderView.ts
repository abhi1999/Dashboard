import { IApiAsnOrderView } from '../edidb'
export class CApiAsnOrderView implements IApiAsnOrderView {
    public Order_No:number = 0;
    public TP_PartID:string = '';
    public TP_Name:string = '';
    public Order_Date:string = '';
    public Acct_Order_No:string = '';
    public Cust_PO:string = '';
    public Stat_Flag:string = '';
    public status:string = '';
    public constructor(init?:Partial<CApiAsnOrderView>) { Object.assign(this, init); }
}
export const IApiAsnOrderView_TP_PartID_length = 30;
export const IApiAsnOrderView_TP_Name_length = 30;
export const IApiAsnOrderView_Order_Date_length = 8;
export const IApiAsnOrderView_Acct_Order_No_length = 30;
export const IApiAsnOrderView_Cust_PO_length = 30;
export const IApiAsnOrderView_Stat_Flag_length = 1;
export const IApiAsnOrderView_status_length = 500;
