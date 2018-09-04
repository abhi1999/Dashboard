import { IApiItemDetail } from '../edidb'
export class CApiItemDetail implements IApiItemDetail {
    public PO_ID:number = 0;
    public PO1_LineNo:string = '';
    public PO1_02:string = '';
    public PO1_03:string = '';
    public PO1_04:number = 0;
    public PO1_05:string = '';
    public PO1_06:string = '';
    public PO1_07:string = '';
    public PO1_EDIqty:string = '';
    public PO1_EDIline:string = '';
    public ItemID:string = '';
    public ItemDesc:string = '';
    public NewQty:string = '';
    public AcctUOM:string = '';
    public AcctQty:string = '';
    public AcctPrice:string = '';
    public constructor(init?:Partial<CApiItemDetail>) { Object.assign(this, init); }
}
export const IApiItemDetail_PO1_LineNo_length = 11;
export const IApiItemDetail_PO1_02_length = 15;
export const IApiItemDetail_PO1_03_length = 10;
export const IApiItemDetail_PO1_05_length = 2;
export const IApiItemDetail_PO1_06_length = 2;
export const IApiItemDetail_PO1_07_length = 500;
export const IApiItemDetail_PO1_EDIqty_length = 16;
export const IApiItemDetail_PO1_EDIline_length = 20;
export const IApiItemDetail_ItemID_length = 500;
export const IApiItemDetail_ItemDesc_length = 80;
export const IApiItemDetail_NewQty_length = 16;
export const IApiItemDetail_AcctUOM_length = 10;
export const IApiItemDetail_AcctQty_length = 15;
export const IApiItemDetail_AcctPrice_length = 17;
