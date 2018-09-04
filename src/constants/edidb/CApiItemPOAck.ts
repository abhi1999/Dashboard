import { IApiItemPOAck } from '../edidb'
export class CApiItemPOAck implements IApiItemPOAck {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public PO1_02:string = '';
    public PO1_03:string = '';
    public PO1_04:string = '';
    public PO1_05:string = '';
    public PO1_06:string = '';
    public PO1_07:string = '';
    public PO1_EDIqty:string = '';
    public PO1_EDIum:string = '';
    public PO1_EDIline:string = '';
    public CTP_02:string = '';
    public CTP_03:string = '';
    public CTP_04:string = '';
    public CTP_05:string = '';
    public CTP_06:string = '';
    public CTP_07:string = '';
    public PS_Type:string = '';
    public PS_Date:string = '';
    public Aut_LMThru:string = '';
    public Aut_MTThru:string = '';
    public PackSize:number = 0;
    public etline_no:number = 0;
    public docline:number = 0;
    public Loc_Override:string = '';
    public Expr1:number = 0;
    public Expr2:string = '';
    public Expr3:string = '';
    public Expr4:string = '';
    public ItemID:string = '';
    public ItemDesc:string = '';
    public NewQty:string = '';
    public constructor(init?:Partial<CApiItemPOAck>) { Object.assign(this, init); }
}
export const IApiItemPOAck_PO1_LineNo_length = 11;
export const IApiItemPOAck_PO1_02_length = 15;
export const IApiItemPOAck_PO1_03_length = 10;
export const IApiItemPOAck_PO1_04_length = 17;
export const IApiItemPOAck_PO1_05_length = 2;
export const IApiItemPOAck_PO1_06_length = 2;
export const IApiItemPOAck_PO1_07_length = 500;
export const IApiItemPOAck_PO1_EDIqty_length = 16;
export const IApiItemPOAck_PO1_EDIum_length = 2;
export const IApiItemPOAck_PO1_EDIline_length = 20;
export const IApiItemPOAck_CTP_02_length = 3;
export const IApiItemPOAck_CTP_03_length = 17;
export const IApiItemPOAck_CTP_04_length = 15;
export const IApiItemPOAck_CTP_05_length = 4;
export const IApiItemPOAck_CTP_06_length = 3;
export const IApiItemPOAck_CTP_07_length = 10;
export const IApiItemPOAck_PS_Type_length = 1;
export const IApiItemPOAck_PS_Date_length = 8;
export const IApiItemPOAck_Aut_LMThru_length = 8;
export const IApiItemPOAck_Aut_MTThru_length = 8;
export const IApiItemPOAck_Loc_Override_length = 20;
export const IApiItemPOAck_Expr2_length = 11;
export const IApiItemPOAck_Expr3_length = 2;
export const IApiItemPOAck_Expr4_length = 500;
export const IApiItemPOAck_ItemID_length = 500;
export const IApiItemPOAck_ItemDesc_length = 500;
export const IApiItemPOAck_NewQty_length = 16;
