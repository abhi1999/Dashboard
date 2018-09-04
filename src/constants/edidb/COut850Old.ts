import { IOut850Old } from '../edidb'
export class COut850Old implements IOut850Old {
    public ID:number = 0;
    public TP_ID:string = '';
    public PO_NO:string = '';
    public PO_Date:string = '';
    public PO_ID:string = '';
    public ShipTo_Xref:string = '';
    public ShipToContact:string = '';
    public ShipToName:string = '';
    public ShipToName2:string = '';
    public ShipToAddress:string = '';
    public ShipToAddress2:string = '';
    public ShipToCity:string = '';
    public ShipToState:string = '';
    public ShipToZip:string = '';
    public Cust_Dept_Code:string = '';
    public Ship_Date:string = '';
    public Cancel_Date:string = '';
    public Int_Item_No:string = '';
    public Item_Qty:string = '';
    public Item_UM:string = '';
    public Item_Price:string = '';
    public PostStatus:string = '';
    public ShipMethod:string = '';
    public ShipToCountry:string = '';
    public PO1_LineNo:string = '';
    public vp_LineNo:string = '';
    public docline:number = 0;
    public etline_no:number = 0;
    public ShipTo_DC_Xref:string = '';
    public constructor(init?:Partial<COut850Old>) { Object.assign(this, init); }
}
export const IOut850Old_TP_ID_length = 30;
export const IOut850Old_PO_NO_length = 22;
export const IOut850Old_PO_Date_length = 8;
export const IOut850Old_PO_ID_length = 10;
export const IOut850Old_ShipTo_Xref_length = 30;
export const IOut850Old_ShipToContact_length = 50;
export const IOut850Old_ShipToName_length = 80;
export const IOut850Old_ShipToName2_length = 80;
export const IOut850Old_ShipToAddress_length = 80;
export const IOut850Old_ShipToAddress2_length = 80;
export const IOut850Old_ShipToCity_length = 40;
export const IOut850Old_ShipToState_length = 20;
export const IOut850Old_ShipToZip_length = 15;
export const IOut850Old_Cust_Dept_Code_length = 30;
export const IOut850Old_Ship_Date_length = 8;
export const IOut850Old_Cancel_Date_length = 8;
export const IOut850Old_Int_Item_No_length = 30;
export const IOut850Old_Item_Qty_length = 16;
export const IOut850Old_Item_UM_length = 10;
export const IOut850Old_Item_Price_length = 16;
export const IOut850Old_PostStatus_length = 1;
export const IOut850Old_ShipMethod_length = 2;
export const IOut850Old_ShipToCountry_length = 30;
export const IOut850Old_PO1_LineNo_length = 20;
export const IOut850Old_vp_LineNo_length = 11;
export const IOut850Old_ShipTo_DC_Xref_length = 30;