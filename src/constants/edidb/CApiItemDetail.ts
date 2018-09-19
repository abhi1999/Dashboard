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

export const kApiItemDetail_PO_ID="PO_ID";
export const kApiItemDetail_PO1_LineNo="PO1_LineNo";
export const kApiItemDetail_PO1_02="PO1_02";
export const kApiItemDetail_PO1_03="PO1_03";
export const kApiItemDetail_PO1_04="PO1_04";
export const kApiItemDetail_PO1_05="PO1_05";
export const kApiItemDetail_PO1_06="PO1_06";
export const kApiItemDetail_PO1_07="PO1_07";
export const kApiItemDetail_PO1_EDIqty="PO1_EDIqty";
export const kApiItemDetail_PO1_EDIline="PO1_EDIline";
export const kApiItemDetail_ItemID="ItemID";
export const kApiItemDetail_ItemDesc="ItemDesc";
export const kApiItemDetail_NewQty="NewQty";
export const kApiItemDetail_AcctUOM="AcctUOM";
export const kApiItemDetail_AcctQty="AcctQty";
export const kApiItemDetail_AcctPrice="AcctPrice";
