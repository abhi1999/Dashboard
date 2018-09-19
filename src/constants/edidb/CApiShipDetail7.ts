import { IApiShipDetail7 } from '../edidb'
export class CApiShipDetail7 implements IApiShipDetail7 {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public TP_ID:string = '';
    public ShipTo_Xref:string = '';
    public Order_Date:string = '';
    public Ship_Date:string = '';
    public Cust_PO:string = '';
    public Cust_Dept:string = '';
    public Loc_ID:string = '';
    public Ship_To_ID:string = '';
    public Ship_To_Name:string = '';
    public Ship_To_Address1:string = '';
    public Ship_To_Address2:string = '';
    public Ship_To_City:string = '';
    public Ship_To_St:string = '';
    public Ship_To_Zip:string = '';
    public ShipFr_Name:string = '';
    public ShipFr_Addr1:string = '';
    public ShipFr_Add2:string = '';
    public ShipFr_City:string = '';
    public ShipFr_St:string = '';
    public ShipFr_Zip:string = '';
    public ShipFr_Country:string = '';
    public Int_Item_No:string = '';
    public Quantity:number = 0;
    public QtyPacked:number = 0;
    public Price:number = 0;
    public UnitofMeas:string = '';
    public Exp_Flag:string = '';
    public Stat_Flag:string = '';
    public Order_Wt:number = 0;
    public Acct_Line_No:number = 0;
    public User1:string = '';
    public User2:string = '';
    public User3:string = '';
    public User4:string = '';
    public User5:string = '';
    public Ship_To_Address3:string = '';
    public TP_PartID:string = '';
    public Acct_Order_No:string = '';
    public Ship_To_Country:string = '';
    public Pick_Date:string = '';
    public QtyPackedS:string = '';
    public QuantityS:string = '';
    public PackQty:string = '';
    public Box_ID:number = 0;
    public Pack_Level:number = 0;
    public SSCC:string = '';
    public PriceC:number = 0;
    public Order_DateF:string = '';
    public constructor(init?:Partial<CApiShipDetail7>) { Object.assign(this, init); }
}
export const IApiShipDetail7_TP_ID_length = 30;
export const IApiShipDetail7_ShipTo_Xref_length = 30;
export const IApiShipDetail7_Order_Date_length = 8;
export const IApiShipDetail7_Ship_Date_length = 8;
export const IApiShipDetail7_Cust_PO_length = 30;
export const IApiShipDetail7_Cust_Dept_length = 30;
export const IApiShipDetail7_Loc_ID_length = 20;
export const IApiShipDetail7_Ship_To_ID_length = 40;
export const IApiShipDetail7_Ship_To_Name_length = 50;
export const IApiShipDetail7_Ship_To_Address1_length = 50;
export const IApiShipDetail7_Ship_To_Address2_length = 50;
export const IApiShipDetail7_Ship_To_City_length = 30;
export const IApiShipDetail7_Ship_To_St_length = 20;
export const IApiShipDetail7_Ship_To_Zip_length = 20;
export const IApiShipDetail7_ShipFr_Name_length = 50;
export const IApiShipDetail7_ShipFr_Addr1_length = 50;
export const IApiShipDetail7_ShipFr_Add2_length = 50;
export const IApiShipDetail7_ShipFr_City_length = 30;
export const IApiShipDetail7_ShipFr_St_length = 20;
export const IApiShipDetail7_ShipFr_Zip_length = 20;
export const IApiShipDetail7_ShipFr_Country_length = 30;
export const IApiShipDetail7_Int_Item_No_length = 500;
export const IApiShipDetail7_UnitofMeas_length = 10;
export const IApiShipDetail7_Exp_Flag_length = 1;
export const IApiShipDetail7_Stat_Flag_length = 1;
export const IApiShipDetail7_User1_length = 30;
export const IApiShipDetail7_User2_length = 30;
export const IApiShipDetail7_User3_length = 30;
export const IApiShipDetail7_User4_length = 30;
export const IApiShipDetail7_User5_length = 30;
export const IApiShipDetail7_Ship_To_Address3_length = 50;
export const IApiShipDetail7_TP_PartID_length = 30;
export const IApiShipDetail7_Acct_Order_No_length = 30;
export const IApiShipDetail7_Ship_To_Country_length = 30;
export const IApiShipDetail7_Pick_Date_length = 8;
export const IApiShipDetail7_QtyPackedS_length = 8000;
export const IApiShipDetail7_QuantityS_length = 8000;
export const IApiShipDetail7_PackQty_length = 8000;
export const IApiShipDetail7_SSCC_length = 30;
export const IApiShipDetail7_Order_DateF_length = 10;

export const kApiShipDetail7_Order_No="Order_No";
export const kApiShipDetail7_Line_No="Line_No";
export const kApiShipDetail7_TP_ID="TP_ID";
export const kApiShipDetail7_ShipTo_Xref="ShipTo_Xref";
export const kApiShipDetail7_Order_Date="Order_Date";
export const kApiShipDetail7_Ship_Date="Ship_Date";
export const kApiShipDetail7_Cust_PO="Cust_PO";
export const kApiShipDetail7_Cust_Dept="Cust_Dept";
export const kApiShipDetail7_Loc_ID="Loc_ID";
export const kApiShipDetail7_Ship_To_ID="Ship_To_ID";
export const kApiShipDetail7_Ship_To_Name="Ship_To_Name";
export const kApiShipDetail7_Ship_To_Address1="Ship_To_Address1";
export const kApiShipDetail7_Ship_To_Address2="Ship_To_Address2";
export const kApiShipDetail7_Ship_To_City="Ship_To_City";
export const kApiShipDetail7_Ship_To_St="Ship_To_St";
export const kApiShipDetail7_Ship_To_Zip="Ship_To_Zip";
export const kApiShipDetail7_ShipFr_Name="ShipFr_Name";
export const kApiShipDetail7_ShipFr_Addr1="ShipFr_Addr1";
export const kApiShipDetail7_ShipFr_Add2="ShipFr_Add2";
export const kApiShipDetail7_ShipFr_City="ShipFr_City";
export const kApiShipDetail7_ShipFr_St="ShipFr_St";
export const kApiShipDetail7_ShipFr_Zip="ShipFr_Zip";
export const kApiShipDetail7_ShipFr_Country="ShipFr_Country";
export const kApiShipDetail7_Int_Item_No="Int_Item_No";
export const kApiShipDetail7_Quantity="Quantity";
export const kApiShipDetail7_QtyPacked="QtyPacked";
export const kApiShipDetail7_Price="Price";
export const kApiShipDetail7_UnitofMeas="UnitofMeas";
export const kApiShipDetail7_Exp_Flag="Exp_Flag";
export const kApiShipDetail7_Stat_Flag="Stat_Flag";
export const kApiShipDetail7_Order_Wt="Order_Wt";
export const kApiShipDetail7_Acct_Line_No="Acct_Line_No";
export const kApiShipDetail7_User1="User1";
export const kApiShipDetail7_User2="User2";
export const kApiShipDetail7_User3="User3";
export const kApiShipDetail7_User4="User4";
export const kApiShipDetail7_User5="User5";
export const kApiShipDetail7_Ship_To_Address3="Ship_To_Address3";
export const kApiShipDetail7_TP_PartID="TP_PartID";
export const kApiShipDetail7_Acct_Order_No="Acct_Order_No";
export const kApiShipDetail7_Ship_To_Country="Ship_To_Country";
export const kApiShipDetail7_Pick_Date="Pick_Date";
export const kApiShipDetail7_QtyPackedS="QtyPackedS";
export const kApiShipDetail7_QuantityS="QuantityS";
export const kApiShipDetail7_PackQty="PackQty";
export const kApiShipDetail7_Box_ID="Box_ID";
export const kApiShipDetail7_Pack_Level="Pack_Level";
export const kApiShipDetail7_SSCC="SSCC";
export const kApiShipDetail7_PriceC="PriceC";
export const kApiShipDetail7_Order_DateF="Order_DateF";
