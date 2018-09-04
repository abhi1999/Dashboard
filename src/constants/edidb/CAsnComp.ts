import { IAsnComp } from '../edidb'
export class CAsnComp implements IAsnComp {
    public CntrID:number = 0;
    public Asn_ID:number = 0;
    public Ship_Weight:number = 0;
    public Ship_Date:string = '';
    public Ship_Via_ID:string = '';
    public Asn_Complete:string = '';
    public Exp_Flag:string = '';
    public Order_No:number = 0;
    public Cust_Dept:string = '';
    public Order_Wt:number = 0;
    public Pack_ID:number = 0;
    public PackQty:number = 0;
    public Pack_Wt:number = 0;
    public Box_ID:number = 0;
    public Line_No:number = 0;
    public Int_Item_No:string = '';
    public Stat_Flag:string = '';
    public TP_ID:string = '';
    public ShipTo_Xref:string = '';
    public Order_Date:string = '';
    public Cust_PO:string = '';
    public Ship_To_ID:string = '';
    public Ship_To_Name:string = '';
    public Ship_To_Address1:string = '';
    public Ship_To_Address2:string = '';
    public Ship_To_City:string = '';
    public Ship_To_St:string = '';
    public Ship_To_Zip:string = '';
    public Quantity:number = 0;
    public QtyPacked:number = 0;
    public Price:number = 0;
    public Del_Date:string = '';
    public UnitofMeas:string = '';
    public ShipToPeps:boolean;
    public Bol_No:string = '';
    public Pro_No:string = '';
    public User1:string = '';
    public User2:string = '';
    public Trailer:string = '';
    public Collect:boolean;
    public constructor(init?:Partial<CAsnComp>) { Object.assign(this, init); }
}
export const IAsnComp_Ship_Date_length = 8;
export const IAsnComp_Ship_Via_ID_length = 30;
export const IAsnComp_Asn_Complete_length = 1;
export const IAsnComp_Exp_Flag_length = 1;
export const IAsnComp_Cust_Dept_length = 30;
export const IAsnComp_Int_Item_No_length = 30;
export const IAsnComp_Stat_Flag_length = 1;
export const IAsnComp_TP_ID_length = 30;
export const IAsnComp_ShipTo_Xref_length = 30;
export const IAsnComp_Order_Date_length = 8;
export const IAsnComp_Cust_PO_length = 30;
export const IAsnComp_Ship_To_ID_length = 40;
export const IAsnComp_Ship_To_Name_length = 50;
export const IAsnComp_Ship_To_Address1_length = 50;
export const IAsnComp_Ship_To_Address2_length = 50;
export const IAsnComp_Ship_To_City_length = 50;
export const IAsnComp_Ship_To_St_length = 50;
export const IAsnComp_Ship_To_Zip_length = 20;
export const IAsnComp_Del_Date_length = 8;
export const IAsnComp_UnitofMeas_length = 10;
export const IAsnComp_Bol_No_length = 30;
export const IAsnComp_Pro_No_length = 30;
export const IAsnComp_User1_length = 50;
export const IAsnComp_User2_length = 50;
export const IAsnComp_Trailer_length = 50;
