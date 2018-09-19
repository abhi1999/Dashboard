import { IApiTradeIn810h } from '../edidb'
export class CApiTradeIn810h implements IApiTradeIn810h {
    public In810_ID:number = 0;
    public TP_PartID:string = '';
    public InvoiceNo:string = '';
    public InvoiceDate:Date;
    public PurchaseOrder:string = '';
    public FreightAmt:number = 0;
    public MiscAmt:number = 0;
    public TaxAmt:number = 0;
    public InvoiceAmt:number = 0;
    public Exp_Flag:string = '';
    public TP_Name:string = '';
    public constructor(init?:Partial<CApiTradeIn810h>) { Object.assign(this, init); }
}
export const IApiTradeIn810h_TP_PartID_length = 30;
export const IApiTradeIn810h_InvoiceNo_length = 20;
export const IApiTradeIn810h_PurchaseOrder_length = 30;
export const IApiTradeIn810h_Exp_Flag_length = 1;
export const IApiTradeIn810h_TP_Name_length = 30;

export const kApiTradeIn810h_In810_ID="In810_ID";
export const kApiTradeIn810h_TP_PartID="TP_PartID";
export const kApiTradeIn810h_InvoiceNo="InvoiceNo";
export const kApiTradeIn810h_InvoiceDate="InvoiceDate";
export const kApiTradeIn810h_PurchaseOrder="PurchaseOrder";
export const kApiTradeIn810h_FreightAmt="FreightAmt";
export const kApiTradeIn810h_MiscAmt="MiscAmt";
export const kApiTradeIn810h_TaxAmt="TaxAmt";
export const kApiTradeIn810h_InvoiceAmt="InvoiceAmt";
export const kApiTradeIn810h_Exp_Flag="Exp_Flag";
export const kApiTradeIn810h_TP_Name="TP_Name";
