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
