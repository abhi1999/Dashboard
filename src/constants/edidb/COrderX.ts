import { IOrderX } from '../edidb'
export class COrderX implements IOrderX {
    public Order_No:number = 0;
    public Line_No:number = 0;
    public TP_ID:string = '';
    public Order_Date:string = '';
    public Ship_Date:string = '';
    public Cust_PO:string = '';
    public Loc_ID:string = '';
    public Ship_Via_ID:string = '';
    public ShipInstr_1:string = '';
    public ShipInstr_2:string = '';
    public CustRating:string = '';
    public Ship_To_Name:string = '';
    public Ship_To_Address1:string = '';
    public Ship_To_Address2:string = '';
    public Ship_To_City:string = '';
    public Ship_To_St:string = '';
    public Ship_To_Zip:string = '';
    public Ship_To_Country:string = '';
    public Int_Item_No:string = '';
    public Quantity:number = 0;
    public UnitofMeas:string = '';
    public Exp_Flag:string = '';
    public Stat_Flag:string = '';
    public constructor(init?:Partial<COrderX>) { Object.assign(this, init); }
}
export const IOrderX_TP_ID_length = 30;
export const IOrderX_Order_Date_length = 8;
export const IOrderX_Ship_Date_length = 8;
export const IOrderX_Cust_PO_length = 30;
export const IOrderX_Loc_ID_length = 10;
export const IOrderX_Ship_Via_ID_length = 10;
export const IOrderX_ShipInstr_1_length = 50;
export const IOrderX_ShipInstr_2_length = 50;
export const IOrderX_CustRating_length = 5;
export const IOrderX_Ship_To_Name_length = 50;
export const IOrderX_Ship_To_Address1_length = 50;
export const IOrderX_Ship_To_Address2_length = 50;
export const IOrderX_Ship_To_City_length = 30;
export const IOrderX_Ship_To_St_length = 2;
export const IOrderX_Ship_To_Zip_length = 20;
export const IOrderX_Ship_To_Country_length = 30;
export const IOrderX_Int_Item_No_length = 500;
export const IOrderX_UnitofMeas_length = 10;
export const IOrderX_Exp_Flag_length = 1;
export const IOrderX_Stat_Flag_length = 1;
