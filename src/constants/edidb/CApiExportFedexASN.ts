import { IApiExportFedexASN } from '../edidb'
export class CApiExportFedexASN implements IApiExportFedexASN {
    public Asn_ID:number = 0;
    public Bol_No:string = '';
    public Ship_Weight:number = 0;
    public Ship_Date:string = '';
    public Box_ID:number = 0;
    public Order_No:number = 0;
    public Acct_Order_No:string = '';
    public Line_No:number = 0;
    public Ship_To_Name:string = '';
    public Ship_To_Address1:string = '';
    public Ship_To_Address2:string = '';
    public Ship_To_City:string = '';
    public Ship_To_St:string = '';
    public Ship_To_Zip:string = '';
    public Cust_PO:string = '';
    public Int_Item_No:string = '';
    public Item_Desc:string = '';
    public QtyPacked:number = 0;
    public TotalCTNs:number = 0;
    public constructor(init?:Partial<CApiExportFedexASN>) { Object.assign(this, init); }
}
export const IApiExportFedexASN_Bol_No_length = 30;
export const IApiExportFedexASN_Ship_Date_length = 8;
export const IApiExportFedexASN_Acct_Order_No_length = 30;
export const IApiExportFedexASN_Ship_To_Name_length = 50;
export const IApiExportFedexASN_Ship_To_Address1_length = 50;
export const IApiExportFedexASN_Ship_To_Address2_length = 50;
export const IApiExportFedexASN_Ship_To_City_length = 30;
export const IApiExportFedexASN_Ship_To_St_length = 20;
export const IApiExportFedexASN_Ship_To_Zip_length = 20;
export const IApiExportFedexASN_Cust_PO_length = 30;
export const IApiExportFedexASN_Int_Item_No_length = 500;
export const IApiExportFedexASN_Item_Desc_length = 80;