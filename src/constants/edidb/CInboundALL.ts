import { IInboundALL } from '../edidb'
export class CInboundALL implements IInboundALL {
    public TP_PartID:string = '';
    public Cust_PO:string = '';
    public ReleaseNo:string = '';
    public PO_Date:string = '';
    public CTT_01:string = '';
    public Exp_Flag:string = '';
    public PO_ID:number = 0;
    public Cust_Ship_To:string = '';
    public PO1_LineNo:string = '';
    public Item_Qual:string = '';
    public Item_No:string = '';
    public Item_Qty:string = '';
    public Item_Price:string = '';
    public Item_UM:string = '';
    public SAC_Flag:boolean;
    public ID:number = 0;
    public vp_LineNo:string = '';
    public docline:number = 0;
    public etline_no:number = 0;
    public sch_ship_date:string = '';
    public Out850PID:string = '';
    public constructor(init?:Partial<CInboundALL>) { Object.assign(this, init); }
}
export const IInboundALL_TP_PartID_length = 30;
export const IInboundALL_Cust_PO_length = 22;
export const IInboundALL_ReleaseNo_length = 30;
export const IInboundALL_PO_Date_length = 8;
export const IInboundALL_CTT_01_length = 7;
export const IInboundALL_Exp_Flag_length = 1;
export const IInboundALL_Cust_Ship_To_length = 80;
export const IInboundALL_PO1_LineNo_length = 20;
export const IInboundALL_Item_Qual_length = 2;
export const IInboundALL_Item_No_length = 500;
export const IInboundALL_Item_Qty_length = 16;
export const IInboundALL_Item_Price_length = 17;
export const IInboundALL_Item_UM_length = 10;
export const IInboundALL_vp_LineNo_length = 11;
export const IInboundALL_sch_ship_date_length = 8;
