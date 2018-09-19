import { IApiExportFedexShipDate } from '../edidb'
export class CApiExportFedexShipDate implements IApiExportFedexShipDate {
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
    public constructor(init?:Partial<CApiExportFedexShipDate>) { Object.assign(this, init); }
}
export const IApiExportFedexShipDate_Bol_No_length = 30;
export const IApiExportFedexShipDate_Ship_Date_length = 8;
export const IApiExportFedexShipDate_Acct_Order_No_length = 30;
export const IApiExportFedexShipDate_Ship_To_Name_length = 50;
export const IApiExportFedexShipDate_Ship_To_Address1_length = 50;
export const IApiExportFedexShipDate_Ship_To_Address2_length = 50;
export const IApiExportFedexShipDate_Ship_To_City_length = 30;
export const IApiExportFedexShipDate_Ship_To_St_length = 20;
export const IApiExportFedexShipDate_Ship_To_Zip_length = 20;
export const IApiExportFedexShipDate_Cust_PO_length = 30;
export const IApiExportFedexShipDate_Int_Item_No_length = 500;
export const IApiExportFedexShipDate_Item_Desc_length = 80;

export const kApiExportFedexShipDate_Asn_ID="Asn_ID";
export const kApiExportFedexShipDate_Bol_No="Bol_No";
export const kApiExportFedexShipDate_Ship_Weight="Ship_Weight";
export const kApiExportFedexShipDate_Ship_Date="Ship_Date";
export const kApiExportFedexShipDate_Box_ID="Box_ID";
export const kApiExportFedexShipDate_Order_No="Order_No";
export const kApiExportFedexShipDate_Acct_Order_No="Acct_Order_No";
export const kApiExportFedexShipDate_Line_No="Line_No";
export const kApiExportFedexShipDate_Ship_To_Name="Ship_To_Name";
export const kApiExportFedexShipDate_Ship_To_Address1="Ship_To_Address1";
export const kApiExportFedexShipDate_Ship_To_Address2="Ship_To_Address2";
export const kApiExportFedexShipDate_Ship_To_City="Ship_To_City";
export const kApiExportFedexShipDate_Ship_To_St="Ship_To_St";
export const kApiExportFedexShipDate_Ship_To_Zip="Ship_To_Zip";
export const kApiExportFedexShipDate_Cust_PO="Cust_PO";
export const kApiExportFedexShipDate_Int_Item_No="Int_Item_No";
export const kApiExportFedexShipDate_Item_Desc="Item_Desc";
export const kApiExportFedexShipDate_QtyPacked="QtyPacked";
export const kApiExportFedexShipDate_TotalCTNs="TotalCTNs";
